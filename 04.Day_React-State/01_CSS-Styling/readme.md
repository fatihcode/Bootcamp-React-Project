# React CSS Kuralları

Bu projede tepki uygulamamızda css kullanacağız.
Çalışan React klasörünüzde “src” klasörünüzü boşaltın (veya sadece adı değiştirebilirsiniz).

Talimatları aşağıda saklayın.

1. src klasörü içinde bir klasör bileşenleri oluşturun. Ve bir App.js dosyası oluşturun.
2. App.js'de; App adlı bir işlev bileşeni oluşturun ve bir üst div (sınıf adı "üst") döndürün.
3. Div'in içinde; oluşturmak,
   bir h1 öğesi (sınıf adı "başlık"): "Merhaba Dünya",
   bir h2 öğesi (sınıf adı “çocuk”): “Nasılsın?”,
   bir p öğesi: “iyiyim!”.

Uygulamayı çalıştırın (npm start) ve DOM'nizdeki öğelerin içeriğini görün.

4. Şimdi, component klasörü içinde bir App.css dosyası oluşturun. Bu dosyayı App.js'den içe aktarın. css dosyasının içinde; her öğeye farklı yazı tipi renkleri verin, ana öğeye ayrıca bir arka plan rengi verin. Sonucu görün.
5. Bileşenler klasörünün dışında bir style.css dosyası oluşturun ve bunu index.js'den içe aktarın.
6. style.css'de ana öğeye farklı bir yazı tipi rengi verin (çocuklardan farklı). Hiçbirşey değişmedi? 😊
7. Her öğeye farklı renkler vermeyi deneyin. Gördünüz mü, tüm renkler style.css'e göre değişti. Bu, bileşenler arasında önceliktir.
8. Ancak id, class ve tag arasındaki css önceliklerini unutmayın. Şimdi, p öğesinin içinde “parap” adında bir kimlik oluşturun. Bu kimliğe App.css içinde farklı bir renk verin. Sonucu görün.

Bir öğe için birden fazla kural geçerliyse ve aynı özelliği belirtiyorsa, CSS daha spesifik seçiciye sahip kurala öncelik verir. Kimlik seçici, sınıf seçiciden daha spesifiktir ve bu da bir etiket seçiciden daha spesifiktir.

---

# React CSS Rules

In this Project we are going to use css in
our react app.

In your working React folder, empty your “src”
folder (or you may just change name).

Keep instructions below.

Create a folder components inside src folder. And create an App.js file.

In App.js; create a function component named App and return a parent div (class name “parent).

Inside div; create, one h1 element (class name “title”): “Hello World”,

one h2 element (class name “child”): “How are you?”,

one p element: “im fine!”.

Run the app (npm start) and see elements content in your DOM.

Now, create an App.css file inside components folder. Import this file from App.js. Inside css file; give each element different font colors, give parent element a background color also. See the result.

Create a style.css file outside components folder and import it from index.js.

In style.css give parent element a different font color (different to childs). Nothing changed? 😊

Try giving each element different colors. Did you see, all the colors changed according to the style.css. This is priority between components.

But remember css priorities between id, class and tag. Now, create an id named “parap” inside p element. Give that id different color inside App.css. See the result.

If more than one rule applies to an element and specifies the same property, then CSS gives priority to the rule that has the more specific selector. An ID selector is more
specific than a class selector, which in turn is more specific than a tag selector.
