var patients = [{"name":"1.png", "step1-prediction": "Non healthy",
                 "step1-confidence": 99.08, "step2-prediction": "DR",
                 "step2-confidence": 99.96},
                {"name":"2.jpg", "step1-prediction": "Non healthy",
                 "step1-confidence": 79.48, "step2-prediction": "AMD",
                 "step2-confidence": 98.79},
                {"name":"3.jpeg", "step1-prediction": "Healthy",
                 "step1-confidence": 84.15, "step2-prediction": "-",
                 "step2-confidence": "-"},
                {"name":"4.jpeg", "step1-prediction": "Non healthy",
                 "step1-confidence": 99.94, "step2-prediction": "DR",
                 "step2-confidence": 99.94},
                {"name":"5.jpg", "step1-prediction": "Non healthy",
                 "step1-confidence": 99.92, "step2-prediction": "DR",
                 "step2-confidence": 99.90},
                {"name":"6.jpeg", "step1-prediction": "Healthy",
                 "step1-confidence": 73.49, "step2-prediction": "-",
                 "step2-confidence": "-"},
                {"name":"7.jpg", "step1-prediction": "Non healthy",
                 "step1-confidence": 99.06, "step2-prediction": "AMD",
                 "step2-confidence": 99.99},
                {"name":"8.jpeg", "step1-prediction": "Healthy",
                 "step1-confidence": 94.12, "step2-prediction": "-",
                 "step2-confidence": "-"},
                {"name":"9.jpg", "step1-prediction": "Non healthy",
                 "step1-confidence": 93.02, "step2-prediction": "AMD",
                 "step2-confidence": 99.65},
                {"name":"10.png", "step1-prediction": "Non healthy",
                 "step1-confidence": 97.82, "step2-prediction": "AMD",
                 "step2-confidence": 100},
                {"name":"11.jpg", "step1-prediction": "Non healthy",
                 "step1-confidence": 99.97, "step2-prediction": "DR",
                 "step2-confidence": 99.08},
                {"name":"12.jpeg", "step1-prediction": "Non healthy",
                 "step1-confidence": 99.97, "step2-prediction": "DR",
                 "step2-confidence": 100},
                {"name":"13.jpeg", "step1-prediction": "Healthy",
                 "step1-confidence": 85.37, "step2-prediction": "-",
                 "step2-confidence": "-"},
                {"name":"14.png", "step1-prediction": "Non healthy",
                 "step1-confidence": 99.30, "step2-prediction": "DR",
                 "step2-confidence": 99.80},
                {"name":"15.jpeg", "step1-prediction": "Healthy",
                 "step1-confidence": 84.51
                 , "step2-prediction": "-",
                 "step2-confidence": "-"}];

$(document).ready(function() {
  $('#patient').on('change', function() {
    patient = patients[this.value - 1];
    $('#pred1').text(patient["step1-prediction"]);
    $('#conf1').text(patient["step1-confidence"] + " %");
    $('#pred2').text(patient["step2-prediction"]);
    $('#conf2').text(patient["step2-confidence"] + " %");
    $('#fundus').attr("src", "img/patients/"+patient["name"]);
    $('#map1').attr("src", "img/maps/stage1/"+ this.value + ".png");
    $('#map2').attr("src", "img/maps/stage2/"+ this.value + ".png");
  });
  $('#patient').val(1).trigger("change");
});
