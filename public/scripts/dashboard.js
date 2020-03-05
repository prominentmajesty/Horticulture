window.onload =function(){
    $(function () {
        // Auto play modal video
        $(".video").click(function () {
          var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
          });
        });
      });
    var CropPayment = document.getElementById('CropPayment');
      var forGuarden = document.getElementById('forGuarden');
      var forGalery = document.getElementById('forGalery');
      var setting = document.getElementById('setting');
      var btn_launch = document.getElementById('btn_launch');
      var fullName = document.getElementById('fullName');
      var cropVariety = document.getElementById('cropVariety');
      var cardNumberForPayment = document.getElementById('cardNumberForPayment');
      var cardCodeForPayment = document.getElementById('cardCodeForPayment');
      var expiringDatForPayment = document.getElementById('expiringDatForPayment');
      var showSuccessAlart = document.getElementById('showSuccessAlart');
      var showErrorAlart = document.getElementById('showErrorAlart');
      showSuccessAlart.style.display = 'none';
      showErrorAlart.style.display = 'none';
      $('#ForVideo').css('display','none');
      $('#ForPhoto').css('display','none');
      $('#forTable').css('display','none');

      CropPayment.addEventListener('click', function(){
        $('#payforCrops').css('display','block');
        $('#ForVideo').css('display','none');  
        $('#ForPhoto').css('display','none');
        $('#forTable').css('display','none');
      })
      forGuarden.addEventListener('click', function(){
        $('#ForVideo').css('display','block');
        $('#payforCrops').css('display','none');
        $('#ForPhoto').css('display','none');
        $('#forTable').css('display','none');
      });
      forGalery.addEventListener('click', function(){
        $('#ForPhoto').css('display','block');
        $('#payforCrops').css('display','none');
        $('#ForVideo').css('display','none'); 
        $('#forTable').css('display','none');
      });
      setting.addEventListener('click', function(){
        $('#forTable').css('display','block');
        $('#payforCrops').css('display','none');
        $('#ForVideo').css('display','none'); 
        $('#ForPhoto').css('display','none');
      });
          var array = new Uint32Array(10);
          var holder;
          var addString = 'NIG/REG_13/'; 
          window.crypto.getRandomValues(array);

          console.log("Your lucky numbers:");
          for (var i = 0; i < array.length-9; i++) {
            holder = addString + array[i];
            console.log(holder);
          }
        
      function makePayment(){
        var postData = {
          fullName : fullName.value,
          cropVariety : cropVariety.value,
          cardNumberForPayment : cardNumberForPayment.value,
          cardCodeForPayment : cardCodeForPayment.value,
          expiringDatForPayment : expiringDatForPayment.value,
          randomNumber : holder
        }

        $.ajax({
          method : 'POST',
          url : '/users/postPayment',
          dataType : 'json',
          data : postData,
          statusCode : {
            406 : function(msg,status,jqXHR){
              console.log(status);
            },
            501 : function(msg, status, jqXHR){
              console.log(status);
            },
            200 : function(msg, status, jqXHR){
                console.log(status);
            }
          }
        }).done(function (msg, status, jqXHR) {
            console.log(jqXHR.responseJSON.data);
            $('#showSuccessAlart').html('');
            var content = document.createTextNode("Success !! your id is : " + jqXHR.responseJSON.data._id);
            showSuccessAlart.appendChild(content);
            showSuccessAlart.style.display = 'block';
            setTimeout(function(){
              $('#showSuccessAlart').fadeOut();
            },6000);
        }).fail(function(msg, status, jqXHR){
            console.log(jqXHR.responseJSON.msg);
            $('#showErrorAlart').html('');
            var content = document.createTextNode(jqXHR.responseJSON.msg);
            showErrorAlart.appendChild(content);
            showErrorAlart.style.display ='block';
            setTimeout(function(){
              $('#showErrorAlart').fadeOut();
            },6000);
        });
        
      }
      btn_launch.addEventListener('click', function(e){
        e.preventDefault();
        makePayment();
      });
  $('#envelopeId').click(function(){
    window.location.href = '/';
  });
}