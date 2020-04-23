$(document).ready(function() {
  var renderTimeline = function() {
    var stepsCount = $('#steps-count').val();
    var currentStep = $('#current-step').val();
    var labelPosition = $('#label-position').val();

    var result = '';

    result += '<ul class="timeline' +
      ' timeline_label-position_' + labelPosition +
      '">';

    for (var i = 1; i <= stepsCount; i++) {
      result += '<li class="timeline__step';
      if (i < currentStep) {
        result += ' timeline__step_status_success';
      }
      if (i == currentStep) {
        result += ' timeline__step_status_process';
      }
      result += '">';
      result += '<span class="timeline__step-label">Step ' + i + '</span>';
      result += '<span class="timeline__step-line"></span>';
      result += '</li>';
    }

    result += '</ul>';

    $('#result').html(result);
  };

  renderTimeline();

  $('#steps-count, #current-step, #label-position').on(
    'change',
    function(event) {
      renderTimeline();
    },
  );
});
