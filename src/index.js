import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GenerateGif from './generate-gif'

function getElements(response) {
  if (response.data) {
    $('.showGif').html("<img src=" + `${response.data.images.downsized_medium.url}` + "/>"); 
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(tag) {
  const response = await GenerateGif.getGif(tag);
  getElements(response);
}

$(document).ready(function() {
  $('#newGif').click(function() {
    let tag = $('#tag').val();
    makeApiCall(tag);
    $('#result').show();
  });
});
