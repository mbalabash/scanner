const kGitVersionVariants = ["git:", "git+", "github:"];

/**
 * @example isGitDependency("github:NodeSecure/scanner") // => true
 * @example isGitDependency("git+ssh://git@github.com:npm/cli#semver:^5.0") // => true
 * @example isGitDependency(">=1.0.2 <2.1.2") // => false
 * @example isGitDependency("http://asdf.com/asdf.tar.gz") // => false
 * @param {string} version
 * @returns {boolean}
 */
export function isGitDependency(version) {
  for (const variant of kGitVersionVariants) {
    if (version.startsWith(variant)) {
      return true;
    }
  }

  return false;
}

