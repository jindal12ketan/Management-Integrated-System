const matchPathWithParams = (path, pattern) => {
    const pathSegments = path.split("/");
    const patternSegments = pattern.split("/");
  
    if (pathSegments.length !== patternSegments.length) {
      return false;
    }
  
    for (let i = 0; i < patternSegments.length; i++) {
      const patternSegment = patternSegments[i];
      if (patternSegment.startsWith(":")) {
        // Dynamic placeholder
        continue;
      }
      if (patternSegment !== pathSegments[i]) {
        return false;
      }
    }
  
    return true;
  };
  
  export default matchPathWithParams;
  