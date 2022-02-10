# React Satır İçi Şekillendirme

Bu Projede satır içi stil olarak css kurallarını kullanacağız.
Çalışan React klasörünüzde “src” klasörünüzü boşaltın (veya sadece adı değiştirebilirsiniz). Projenizin src'sini buraya koyun.

Talimatları aşağıda saklayın.

1. src klasörü içinde bir klasör bileşenleri oluşturun. Ve bir App.js dosyası oluşturun.
2. App.js'de; App adlı bir işlev bileşeni oluşturun ve bir üst div döndürün.
3. Div'in içinde; oluşturmak,
   bir "h1" öğesi: "Sayfama Hoş Geldiniz",
   bir MyPoems bileşeni (daha sonra oluşturacağınız),
   bir "altbilgi" öğesi: "Sayfamı Ziyaret Ettiğiniz İçin Teşekkür Ederiz!".
4. Şimdi, bileşenler klasörü içinde bir MyPoem bileşeni oluşturun. Başlık ve paragraf şiirden oluşmalıdır (Örnek şiiri sayfanın altında bulabilirsiniz). Bu dosyayı App.js'den içe aktarın.

Uygulamayı çalıştırın (npm start) ve DOM'nizdeki içeriği görün.

5. App.js dosyasında styleSheet nesnesini style.js'den içe aktarın.
6. Bir "arka plan" özelliğine sahip bir "divStyle" nesnesi oluşturun. Bu özelliği styleSheet nesnesinin arka plan değerine atayın.
7. Şimdi ana div öğenizin içinde “style” özniteliği ile “divStyle” nesnesini kullanın. Sonuca bakın; Karşılama mesajınızı veya şiirinizi görebilir misiniz? 😊.
8. h1 öğesine biraz satır içi stil ekleyin, renkli olabilir.
9. Ayrıca, alt bilgiye stil niteliği ekleyin ve stil için styleSheet'in rengini ve styleSheet'in yazı tipi boyutunu kullanın. Sonucu görün.
10. Son olarak, MyPoem bileşenini styleSheet nesne özellikleriyle stillendirmeyi unutmayın. (Uygulama bileşeninde yaptığınız gibi)

SABAH KAR
Çift dağa çıkıyor.
Dağa çıkmak için uzun zamandır seyahat ediyorlar.
Tıslayan oğulları ile erken ayrıldılar
parmaklarıyla tatlı şarkılar,
annesinin küçükken söylediği şarkılar,
onun gibi tatlı tatlı şarkı söylüyor...

---

# React Inline Styling

In this Project we are going to use css rules
as inline styling.

In your working React folder, empty your “src”
folder (or you may just change name). Put your project’s src here.

Keep instructions below.

Create a folder components inside src folder. And create an App.js
file.

In App.js; create a function component named App and return a
parent div.

Inside div; create,

one “h1” element : “Welcome To My Page”,

one MyPoems component (that you will create later),

one “footer” element: “Thank You Visiting My Page!”.

Now, create a MyPoem component inside components folder. It should
return a h1 element fort title and paragraph consist of a poem (You can find
sample poem under the page). Import this file from App.js.

Run the app (npm start) and see content in
your DOM.

In App.js file import styleSheet object from styles.js.

Create a “divStyle” object with one property “background”. Assign
this property to the background value of styleSheet object.

Now use “divStyle” object with the attribute “style” inside your
parent div element. See the result; Could you see your welcome message or poem?
😊.

Add some inline styling to the h1 element, may be color.

Also, add style attribute to the footer and use styleSheet’s
color and styleSheet’s font size for styling. See the result.

And finally dont forget to style MyPoem component with the
styleSheet object properties. (as you did in App component)

SNOW IN
THE MORNING

The
couple is traveling up the mountain.

They have been traveling a long time to get to
the mountain.

They left early with their son who strums

sweet songs with his fingers,

songs his mother sang when she was young,

singing sweetly like him for...
