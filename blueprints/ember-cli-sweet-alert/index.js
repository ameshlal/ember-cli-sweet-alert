module.exports = {
  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-bootstrap and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('sweetalert', 'ashu07/sweetalert#c5df985144936f9f89fd5df2d458d8153f33796b');
  }
};
