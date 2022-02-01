# REACT JSX PROJESİ

Bu projede react jsx ile çok basit bir “Merhaba Dünya” sayfası oluşturacağız.
Proje klasörünüzde, oluşturulmakta olan .js dosyalarınız var. React uygulaması oluşturmanız ve paketleri yüklemeniz gerekmez. Ayrıca react'tan herhangi bir öğeyi içe aktarmaya gerek yok. Talimatları saklayın.

* [ ] `src` klasörü altında bir index.js dosyası oluşturun.
* [ ] React render metodu ile (`ReactDOM.render`); DOM öğesi "example"ne bir "Merhaba Dünya" oluşturun.

    > İPUCU: h1 etiketini kullanın.
    
* [ ] index.html'nizi, VSCode'un "live server" uzantısıyla başlatın.
* [ ] Dört isimden oluşan bir dizi oluşturun, farklı isimler seçin.
* [ ] Bu isimler dizisini Hello World bölümünün altına sadece bir “p” etiketi ile işleyin. Bu `<h1>` ve `<p>` öğelerini bir üst öğeye sarmayı unutmayın; `<div>` olabilir. (div sınıfınızın adını “`card`” olarak verin) Sonuca bakın, isimleriniz tek satırda, bu iyi değil.
* [ ] Tek `<p>` elemanı yerine; önce dizinizi eşleyin ve adları “p” etiketiyle (map methodu) oluşturun. Farkı gör. 
* [ ] isim alamadın mı Düşünmek; `<p>` öğesini haritanın içine return unuttunuz mu? Artık her adınızın DOM'da tek bir satırı var.
* [ ] Bu sefer en az iki HTML öğesinden oluşan bir dizi oluşturun. “Congragulations!” ve `<h2>` ve `<h3>` etiketleriyle “React is awesome”.
* [ ] Bu yeni diziyi başka bir (ikinci) `<div>` kapsayıcısında DOM'a işleyin. Zor nokta. Her şey yolundaysa, devam et.
* [ ] `<p>` etiketini `<li>` ile değiştirin ve haritanızı bir `<ol>` etiketi ile sarmayı unutmayın. Numaralı isimlerinize bakın.
* [ ] Konsolda bir uyarı var: “Uyarı: Bir dizideki veya yineleyicideki her çocuk benzersiz bir "anahtar" prop'a sahip olmalıdır”
* [ ] `<li>` elementlerimize key eklememiz gerekiyor. Bu nedenle, `<li>` öğenize bir anahtar niteliği ekleyin (callback fonksiyonu index değeri alarak).
* [ ] .css dosyamızda sınıflarımız var; “`first`”, “`second`” ve “`third`”. Bu sınıfları `<li>` elementimize sırasına göre vermeliyiz. li öğenize class niteliği ekleyin.
* [ ] `key` değerine göre `className` için; sınıf “`first`”, “`second`” veya “`third`” olmalıdır.

     > İPUCU: Kıvrımlı arkalıklar arasında `className` özniteliği için üçlü eşitliği kullanabilirsiniz.
     
* [ ] Bir şey daha, hala key uyarısı alıyor musunuz? İkinci dizinizi kontrol edin, önemli uyarıları çözmeye çalışın.

AFERİN…

---

# REACT JSX PROJECT

In this Project we will create a very basic “Hello World” page with react jsx.

In your Project folder, you have .js files
under build. You dont need to create react app and you dont need to load packages. Also dont need any import from react. Just keep instructions.

* [ ] Create an index.js file under src folder.
* [ ] With react render method (`ReactDOM.render`); render a “Hello World” in to the DOM element “`example`”.

  > HINT: Use h1 tag.
  
* [ ] start your index.html with “live server” extension of VSCode.
* [ ] Create an array consist of four names, choose different names.
* [ ] Render this names array under the Hello World section with just one “p” tag. Dont forget to Wrap this `<h1>` and `<p>` elements in one parent element; may be a `<div>`. (Give your div class name “card”)
* [ ] See result, your names are in one line, it is not good.
* [ ] Instead of single `<p>` element; first, map your array and render names with “p” tag (inside map). See the difference.
* [ ] Didnt you get any name? Think; did you forget returning `<p>` element inside map.
* [ ] Now your every name has a single line in DOM.
* [ ] This time, create an array consist of at least two HTML elements.
* [ ] “Congragulations!” and “React is awesome” with the tags `<h2>` and `<h3>`.
* [ ] Render this new array to the DOM within another (second) `<div>` container.  *Tricky point* .
* [ ] If everything is ok, go on.
* [ ] Change `<p>` tag with `<li>` and also do not forget to wrap your map with an `<ol>` tag. See your names numbered.
* [ ] There is a warning in the console: *“Warning: Each child in an array or iterator should have a unique "key" prop”*
* [ ] Wee need to add key to our `<li>` elements.
* [ ] So, add a key attribute to your `<li>` element (as value index of callback function).
* [ ] In our .css file we have classes; “`first`”, “`second`” and “`third`”.
* [ ] We should give this classes to our `<li>` element according to its order.
* [ ] Add `class` attribute to your li element. For `className` according to the `key` value; class should be “`first`”, “`second`” or “`third`”.

  > HINT: You can use ternary equality to `className` attribute between curly backets.
  
* [ ] One more thing, do you get key warning still? Check your second array, try to solve key warnings.

WELL DONE…
