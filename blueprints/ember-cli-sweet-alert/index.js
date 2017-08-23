module.exports = {
  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-bootstrap and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('sweetalert', 'ashu07/sweetalert#b3d7b6a782a60f594d6e4193edae541d729fb094');
  }
};
