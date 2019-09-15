var patients = [{"name":"1.jpg", "m1-prediction": "AMD",
                 "m1-confidence": 98.43, "m2-prediction": "AMD",
                 "m2-confidence": 88.15, "m3-prediction": "AMD",
                 "m3-confidence": 97.18,"mf-prediction": "AMD",
                 "mf-confidence": 94.59},
                {"name":"2.jpeg", "m1-prediction": "DR",
                 "m1-confidence": 82.39, "m2-prediction": "DR",
                 "m2-confidence": 70.36, "m3-prediction": "DR",
                 "m3-confidence": 57.16 , "mf-prediction": "DR",
                 "mf-confidence": 69.67 },
                {"name":"3.jpg", "m1-prediction": "AMD",
                 "m1-confidence": 98.76, "m2-prediction": "AMD",
                 "m2-confidence": 98.96, "m3-prediction": "AMD",
                 "m3-confidence": 98.27, "mf-prediction": "AMD",
                 "mf-confidence": 98.66},
                {"name":"4.jpeg", "m1-prediction": "Healthy",
                 "m1-confidence": 78.01, "m2-prediction": "Healthy",
                 "m2-confidence": 63.46, "m3-prediction": "DR",
                 "m3-confidence": 56.29,"mf-prediction": "Healthy",
                 "mf-confidence": 60.44},
                {"name":"5.jpg", "m1-prediction": "AMD",
                 "m1-confidence": 80.91, "m2-prediction": "AMD",
                 "m2-confidence": 68.26, "m3-prediction": "AMD",
                 "m3-confidence": 93.42,"mf-prediction": "AMD",
                 "mf-confidence": 80.86 },
                {"name":"6.jpg", "m1-prediction": "DR",
                 "m1-confidence": 83.55, "m2-prediction": "DR",
                 "m2-confidence": 79.42, "m3-prediction": "DR",
                 "m3-confidence": 58.94,"mf-prediction": "DR",
                 "mf-confidence": 74.57},
                {"name":"7.png", "m1-prediction": "AMD",
                 "m1-confidence": 100, "m2-prediction": "AMD",
                 "m2-confidence": 98.96, "m3-prediction": "AMD",
                 "m3-confidence": 99.77,"mf-prediction": "AMD",
                 "mf-confidence": 99.58 },
                {"name":"8.jpeg", "m1-prediction": "Healthy",
                 "m1-confidence": 55.89, "m2-prediction": "Healthy",
                 "m2-confidence": 60.41, "m3-prediction": "DR",
                 "m3-confidence": 53.61,"mf-prediction": "Healthy",
                 "mf-confidence": 48.66},
                {"name":"9.jpeg", "m1-prediction": "DR",
                 "m1-confidence": 66.85, "m2-prediction": "DR",
                 "m2-confidence": 43.27, "m3-prediction": "Healthy",
                 "m3-confidence": 44.05,"mf-prediction": "DR",
                 "mf-confidence": 49.90 },
                {"name":"10.jpeg", "m1-prediction": "DR",
                 "m1-confidence": 93.87, "m2-prediction": "DR",
                 "m2-confidence": 59.21, "m3-prediction": "Healthy",
                 "m3-confidence": 68.09,"mf-prediction": "DR",
                 "mf-confidence": 67.06 }];

$(document).ready(function() {
  $('#patient').on('change', function() {
    var patient = patients[this.value - 1];
    var pred1 = patient["m1-prediction"] + " (" + patient["m1-confidence"]+ " %)"
    var pred2 = patient["m2-prediction"] + " (" + patient["m2-confidence"]+ " %)"
    var pred3 = patient["m3-prediction"] + " (" + patient["m3-confidence"]+ " %)"
    var predf = patient["mf-prediction"] + " (" + patient["mf-confidence"]+ " %)"
    $('#pred1').text(pred1);
    $('#pred2').text(pred2);
    $('#pred3').text(pred3);
    $('#predf').text(predf);
    $('#fundus').attr("src", "img/patients2/"+patient["name"]);
    $('#map1').attr("src", "img/maps/full/"+ this.value + "_1.png");
    $('#map2').attr("src", "img/maps/full/"+ this.value + "_2.png");
    $('#map3').attr("src", "img/maps/full/"+ this.value + "_3.png");
  });
  $('#patient').val(1).trigger("change");
});
