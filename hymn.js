document.querySelectorAll('input').forEach(e => e.style.color = "blue");
  document.querySelectorAll('input').forEach(e => e.style.background = '#99a0a0a0');
document.getElementById("text0").style.background = '#a0a0a0';
document.getElementById("text0").style.color = '#ff0000';

   var audio_number = 0;   
    
    var playlist = new Array('https://docs.google.com/uc?export=download&id=1wctDFzE8X4VdYY9-4cbkLF5QaFxtJjXw', //الصلاة الربانية ( أبون دبشمايو ) يؤديها الكورال الهندي السرياني
                             'https://docs.google.com/uc?export=download&id=1r5pfPRSEspfInK41YEF63c0Go3cQ3x_-', // شمد بابا برونا – ترتيله
                             'https://docs.google.com/uc?export=download&id=1oUc8uIvWzLayibAW348gwkHdGMYoZZol', //ترتيلة عيد السعانين عربي سورث
                             'https://docs.google.com/uc?export=download&id=1mrGlxzk0VUTuunKKDwAjVe1n_3X8IeZS', //ترنيمة راح صبيان آل يهوذا - عيد السعانين
                             'https://docs.google.com/uc?export=download&id=1LlN98_G0_6mSv_2uHgGZ_oWrkn6KPVPk', //علق على خشبة
                             'https://docs.google.com/uc?export=download&id=11XAtbSs9vWDIIwKLVD9GagxJvkxb6jwp', //انا الام الحزينة
                             'https://docs.google.com/uc?export=download&id=1fpSwXeiHgYUJuIUDldvTpVPsqeAxj6Wc', //ترتيلة قملا مريم براتد داويد
                             'https://docs.google.com/uc?export=download&id=1CWLFY3Bv35ikK3OibpaZIpkwshY5T59V', //ترنيمة يا سيدي كم كان قاسيا
                             'https://docs.google.com/uc?export=download&id=1imSB3uzO8-ASCUTMWdxvPi-HS0FbigFH', //يدك المثقوبة
                             'https://docs.google.com/uc?export=download&id=16hTGJCvRlFIpeqAtfKzIXX55z_B9E0Lr', //ترنیمة المسیح قام
                             'https://docs.google.com/uc?export=download&id=1lFNDOJ8YpjZc3YhqWgDBodxyZJem0xSr', //ترنيمة فى ظل حمايتك نلتجئ يا مريم
                             'https://docs.google.com/uc?export=download&id=1eXtzumgYSOZu1Xs_EgSLj9qx_Yc0rzJh', //كليب ترنيمة لا لن أرى حبا
                             'https://docs.google.com/uc?export=download&id=1cSersdYkzg-jODTIiiu1A9RbhEfzHlIZ', //ترنيمة عارف ضعفي
                             'https://docs.google.com/uc?export=download&id=1bgP3IPO-MjBNepS_exjO623MQnjNfWpw', //ترنيمة .. قولوا للصديق خير
                             'https://docs.google.com/uc?export=download&id=1azfI2PgVh9jQkC3qP5Wb0F0ANQokABD6', //ترنيمة ها آتى بطيبى
                             'https://docs.google.com/uc?export=download&id=1_p5O9m6DGBKVSmnvX0TjKLEsgngQKB10', //ترنیمة في وقت ضعفي
                             'https://docs.google.com/uc?export=download&id=1S3K1h_ozkl_OLf7H8AxdTTPXwuLutKDJ', //متشغلش بالك خايف ليه وتخاف من ايه ربنا موجود
                             'https://docs.google.com/uc?export=download&id=1PTwGSJStGnHLSA4MmogM8pL6_BUGd5OO', //ماتعولش الهم وماتخافش
                             'https://docs.google.com/uc?export=download&id=15vaHLgmkb7kTLCdODEdzyz5FimL7sR2O', //ترنيمة امسك يا رب ايدي
                             'https://docs.google.com/uc?export=download&id=12FIHWkX6vxVZYwmaINmZllOLidB-07Y0', //ترنيمة اوعى تفكر انى نسيتك
                             'https://docs.google.com/uc?export=download&id=121bhl7H7hD0G0YGJlIwGMFiEbpabWJMx', //ترتيلة مدح مريم
                             'https://docs.google.com/uc?export=download&id=1zSxVuVIb9hn5wwYsDW908kgQFWoWMS6r', //وفيما اظنه لا يستجيب
                             'https://docs.google.com/uc?export=download&id=1yMZEUn2KjKu01rinvZHScq2P-a_ByKs5', //ترتيلة عال ترعيك عيتو
                             'https://docs.google.com/uc?export=download&id=1jKkcmoo98vf0do65DK6DwOnL75GzMsMR', //ترتيلة لنسبح و نمجد
                             'https://docs.google.com/uc?export=download&id=1ddstVdIgWWS4xv4-kIKQWGydYjXp5l5F', //تعال بيننا
                             'https://docs.google.com/uc?export=download&id=1dQNjyOsGP0GqIROFx_RSm5ZeRkz0HQc9', //ترنيمة تعالوا إلي
                             'https://docs.google.com/uc?export=download&id=1cr1CGvwJ806nQQC2etH2CfhRZQ2zB_BI', //ترنيمة يا عدرا يا أمي يا غاليه عليا
                             'https://docs.google.com/uc?export=download&id=1b61aNvfQZnk36hZnJw6Ogs5LdWMC3LB2', //ترنيمة القلب الجديد
                             'https://docs.google.com/uc?export=download&id=1YXMLhim_GI9LrrfNXLR52LbRjsecAUfq', //ترتيلة الهي يسوع
                             'https://docs.google.com/uc?export=download&id=1T-kP_7d07AG4dn0rpJdC6-sdM_ETnsHD', //المجد لك ايها المسيح
                             'https://docs.google.com/uc?export=download&id=1ReUB-59W07JdksEM9HsokPVvMqTOMHIm', //ترتيلة انا لست إلا غريبا هنا
                             'https://docs.google.com/uc?export=download&id=1KY_aDZats4G3t-srTwY3v4KqaX3MzXak',//ترنيمة سبحوه مجدوه
                             'https://docs.google.com/uc?export=download&id=1tiCZQ0wv6_SXvVn_I0VtwIDV4zHsAWZa', //ترنيمة يا صاحب الحنان
                             'https://docs.google.com/uc?export=download&id=1Zn8FY5Izp308xUSnW0I97qibGI7JfR3O'); //القداس الالهي حسب طقس الكنيسة السريانية الأرثوذكسية مسموع
    
   audio.addEventListener('ended', function () {
    i = ++i < playlist.length ? i : 0;
    console.log(i)
    audio.src = playlist[i];
    audio.play();
}, true);
audio.volume = 0.3;
audio.loop = false;
audio.src = playlist[audio_number];
audio.autoplay = true;
audio.play();

audio.addEventListener("ended", function() 
     {
          forward();
     });

function forward()
{
  audio.pause();
  audio.currentTime = 0;
  audio_number++;
  if(audio_number>=playlist.length)audio_number=0;
  audio.src = playlist[audio_number];
  audio.play();  
  //////hover text  
  document.querySelectorAll('input').forEach(e => e.style.background = '#99a0a0a0');
  document.querySelectorAll('input').forEach(e => e.style.color = "blue");
  
  document.getElementById("text"+audio_number).style.background = '#a0a0a0';
  document.getElementById("text"+audio_number).style.color = '#ff0000';
  //////////////////
  document.getElementById('selected_hymn').value=document.getElementById("text"+audio_number).value;
  
}

function backward()
{
  audio.pause();
  audio.currentTime = 0;
  audio_number--;
  if(audio_number<0)audio_number=playlist.length-1;
  audio.src = playlist[audio_number];
  audio.play();   
     //////hover text
  document.querySelectorAll('input').forEach(e => e.style.background = '#99a0a0a0');
  document.querySelectorAll('input').forEach(e => e.style.color = "blue");
     
  document.getElementById("text"+audio_number).style.background = '#a0a0a0';
  document.getElementById("text"+audio_number).style.color = '#ff0000';
  //////////////////
  document.getElementById('selected_hymn').value=document.getElementById("text"+audio_number).value;
   
}

function download()
{
  window.location = playlist[audio_number];  
}

////////////////////////for loop onclick
var temp_array = new Array();
    var ctrl = new Array();
    var k = 0;

    do {
      temp_array[k] = ctrl[k] = document.getElementById('text' + k);
      k++;
    } while (temp_array[k - 1]);
    tracks = k - 1;

    function makeHandler(j) {
      return function() {
      
      //////////////////
       // alert(j);
        
        audio.src = playlist[j];
        audio.play();
        audio_number=j;
      
  document.querySelectorAll('input').forEach(e => e.style.background = '#99a0a0a0');
  document.querySelectorAll('input').forEach(e => e.style.color = "blue");
  document.getElementById("text"+audio_number).style.background = '#a0a0a0';
  document.getElementById("text"+audio_number).style.color = '#ff0000';
        ///////////////////////
        document.getElementById('selected_hymn').value=document.getElementById("text"+audio_number).value;
        
      };
    }
    for (var j = 0; j < tracks; j++) {
      ctrl[j].onclick = makeHandler(j);
    }
////////////////////////