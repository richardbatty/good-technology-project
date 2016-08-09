var ProblemList = (function() {
  function readMore(element) {
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
