var ProblemList = (function() {
  function trackEvent(problemName) {
    // Track view problem item event in google analytics
    ga('send', 'event', 'ProblemItem', 'view', problemName);
  }

  function readMore(element, problemName) {
    trackEvent(problemName);
    var problemBoxExtraInfoElements = element
      .parentElement
      .parentElement
      .getElementsByClassName('problem-box-extra-info'); // TODO: this is brittle

    problemBoxExtraInfoElements[0].classList.remove("hidden");
    element.remove();
  };

  return {
    readMore: readMore,
  };
})();
