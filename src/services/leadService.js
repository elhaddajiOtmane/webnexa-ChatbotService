const Lead = require('../models/lead');

exports.createLead = async (leadData) => {
  const lead = new Lead(leadData);
  return await lead.save();
};

exports.getLeads = async () => {
  return await Lead.find();
};
