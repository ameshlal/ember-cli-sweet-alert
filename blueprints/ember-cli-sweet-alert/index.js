module.exports = {
  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-bootstrap and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('sweetalert', 'ashu07/sweetalert#d9e4a83f5f5f010d15fac838c1a7798a7819ce04');
  }
};
