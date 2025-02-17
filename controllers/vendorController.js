const { Op } = require('sequelize');
const { Vendor, Service, VendorService, Address } = require('../models'); // Import necessary models

// Get all vendors with their services, filtered by city, state, and service (with substring matching)
const getVendors = async (req, res) => {
  try {
    // Destructure query parameters from the request
    const { city, state, services } = req.query;

    // Build dynamic filters
    const whereConditions = {};

    // Add filter for city and state if provided, assuming city and state are in the Address table
    const addressConditions = {};
    if (city) {
      addressConditions.city = { [Op.iLike]: `%${city}%` }; // Substring match for city
    }
    if (state) {
      addressConditions.state = { [Op.iLike]: `%${state}%` }; // Substring match for state
    }

    // Fetch vendors with their associated services and address, and apply filters
    const vendors = await Vendor.findAll({
      where: whereConditions, // Add any vendor-level filters if needed
      include: [
        {
          model: Service,
          as: 'services',
          through: { attributes: [] }, // Exclude the join table attributes
          where: services ? { name: { [Op.iLike]: `%${services}%` } } : undefined, // Substring match for service name
        },
        {
          model: Address,
          as: 'address', // Assuming Vendor has a relation to Address
          where: addressConditions, // Filter by city and state with substring matching
        },
      ],
    });

    // Check if vendors are found
    if (vendors.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No vendors found matching the criteria.',
      });
    }

    // Return the response with the vendors data
    res.status(200).json({
      success: true,
      data: vendors,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch vendors.',
    });
  }
};

module.exports = {
  getVendors,
};
