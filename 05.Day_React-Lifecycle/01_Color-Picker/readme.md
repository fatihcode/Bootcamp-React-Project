# React Renk Seçici

Bu projede, butona tıklayarak rengi değiştireceksiniz. Ayrıca yaşam döngüsü yöntemlerini de kullanacaksınız.
Başlayalım!
Önce bu “src” klasörünü çalışan bir react yoluna koyun ve uygulamanızı çalıştırın. Bir renk seçici düğmesi göreceksiniz ama çalışmıyor.

Hedefleriniz;
• Butona tıkladığınızda sayfa rengi rastgele değişir,
• Sayfada `<h1>` öğesinde seçilen renkli baskılar,
• Renge göre (aydınlık olup olmamasına göre) `<h1>` elemanının yazı rengi siyah veya beyaz olarak değişir. Sınıfı değiştirerek bunu gerçekleştirin.
• Renge göre (aydınlık olup olmamasına göre), `<button>` elemanının yazı rengi ve arka plan rengi siyah veya beyaz olarak değişir. Sınıfı değiştirerek bunu gerçekleştirin.

formatColor() yöntemini değiştirmeyin.
Renkleri hatırlamak istiyorsanız, tıklayın: Renkler RGB (w3schools.com)

* [ ] colorpicker.js dosyanızda; bir yapıcı yöntemi oluşturun ve color adında bir durum oluşturun. Bu renge “256”nın altındaki farklı sayıların değerlerine sahip bir dizi verin. Örnek: [42, 25, 146]
  Bu, rgb renk şablonunuz olacaktır.

* [ ] Geçerli renginizi `<h1>` öğesinin içindeki DOM'ye yazdırın. formatColor() 'ın dönen dizesini kullanın.
  İpucu: şöyle olmalı; “Rengininiz : rgb(55, 42, 126)”.
* [ ] isLight() yöntemini düzeltin. Verilen diziye göre true veya false döndürmelidir (durum rengi olacaktır). Bir rengin açık mı yoksa koyu mu olduğuna nasıl karar verebileceğiniz bir hesaplama yöntemi bulmaya çalışın.
* [ ] isLight() yöntemini kullanarak `<h1>` öğe sınıf adınızı değiştirin, .css dosyasından kullanılabilir sınıf adlarını seçin. Elle duruma farklı renkler verin ve sonucu görün.
* [ ] Renginizi DOM gövdesine uygulamalısınız. Bu nedenle, bir applicationColor() yöntemi oluşturun ve rgb renk biçiminizi gövde öğesinin arka plan stiline atayın.
  Bu applicationColor() yöntemini nasıl çağırabilirsiniz? Bir sonraki adıma geçildi.

Farklı seçenekler olabilir;

• Butona tıklayarak bu metodu çağırabilir, bir butona onClick niteliği ekleyebilirsiniz,
• Bu yöntemi componentDidMount() yönteminizin içine ekleyebilirsiniz.
• Bu yöntemi componentDidUpdate() yönteminizin içine ekleyebilirsiniz.
• Bu yöntemi render içinde (dönmeden önce) çağırabilirsiniz.

*Bu yöntemleri deneyin ve farkı görün. Sonunda son seçeneği koru.

ApplyColor() yönteminizi eklediğinizde; sayfayı oluştururken renk uygular. Renginizi elle değiştirin ve çalışıp çalışmadığını görün.

Şimdi rastgele renk seçmemiz gerekiyor. Bir selectColor() yöntemi oluşturun.
Rastgele renk dizisi oluşturmalı ve renk durumunu değiştirmelidir.

Sadece test etmek için: componentDidMount() metodu içindeki fonksiyonunuzu çağırın ve metodunuz düzgün çalışıyorsa sayfanızı (h1 element comntent) kontrol edin.
Çalışıyorsa; componentDidMount() yönteminin içinde silin.

Bu sefer, selectColor() yönteminizi Button bileşenine bir özellik olarak gönderin.

Button.js dosyanızın içinde, `<button>` öğesine bir onClick niteliği verin ve props ile selectColor() yöntemini çağırın.
Düğmenizi deneyin rengi değiştirir

Düğmeye tıklayarak durumunuzu değiştirmeyi başardınız.

Düğme sınıfınızı .css dosyanızdaki uygun olanla değiştirin. Renge göre hafif mi değil mi?

Son olarak, Düğme bileşeninde alt özellik olarak “`<p>`Merhaba, renk seçiciyim `</p>`” kullanın. Düğme metniniz için kullanın.

Tebrikler!

Ek Bilgi
applicationColor() yönteminizi componentDidUpdate() yönteminin içine eklediğinizde; sayfadaki her değişiklikten sonra renk uygular. Bu yüzden her durum değişikliğinden sonra çalışması gerekir.

---

# React Color Picker

In this project, you’ll
change color by clicking the button. You will use life-cycle methods also.

Let’s get started!

First put this “src”
folder to a working react path and run your application. You will see a color
picker button but it doesnt work.

Your goals are;

·
When you click button, page color changes randomly,

·
Choosen color prints on the page in `<h1>`
element,

·
According to color (if it is ligth or not), `<h1>`
element’s font color changes to black or white. Make this happen by changing
the class.

·
According to color (if it is ligth or not), `<button>`
element font color and background color changes to black or white. Make this happen
by changing the class.

**Do not change formatColor()
method.

**If you want to remember colors, click : *[Colors RGB (w3schools.com](https://www.w3schools.com/colors/colors_rgb.asp))*

**1.**

In your colorpicker.js file; create a construtor method and create a state
named color. Give this color an array with the values of different numbers
below “256”. Example: [42, 25, 146]

This will be your rgb color template.

**2.**

Print your current color to the DOM inside `<h1>`
element. Use formatColor() ‘s returning string.

Hint: it should be like ; “Your Color is : rgb(55, 42, 126)”.

**3.**

Fix isLight() method. It should return true or false
according to the given array (will be state color). Try
to find a calculation method how you can decide a color is light or dark.

**4.**

Change your `<h1>` element class name, using the isLight()
method, choose avaible class names from .css file.

Give different colors to the state by hand and see the result.

**5.**

You should apply your color to the body of the DOM. So create an applyColor()
method and assign your rgb color format to the background
style of body element.

How can you call this applyColor() method? Got to the
next step.

**6.**

There may be different options;

·
You can call this method by clicking the button, you can add an
onClick attribute to a button,

·
You can add this method inside your componentDidMount()
method.

·
You can add this method inside your componentDidUpdate()
method.

·
You can call this method inside render (before return).

*Try these methods and see the
difference. Finally keep the last option.

**7.**

When you add your applyColor() method; it applies
color while rendering the page. Change your color by hand and see if it is
working.

**8.**

Now we need to choose color randomly. Create a chooseColor()
method.

It should create random color array and changes the color state.

*Just for testing* : call
your function inside componentDidMount()
method and check your page (h1 element comntent) if your method is working
properly.

If it is working; delete it inside componentDidMount()
method.

**9.**

This time send your chooseColor() method as a property to
the Button component.

**10.**

Inside your Button.js file, give `<button>`
element an onClick attribute and call the chooseColor()
method with the props.

Try your button changes the color

You achieved to change your state by clicking the button.

**11.**

Change your button class with the suitable one in your .css file. According to
the color is ligth or not?

**12.**

Finally in Button component use “`<p>`Hi, im color picker `</p>`” as a
child property. Use it for your button text.

Congragulations!

**Additional
Knowledge**

When you add your applyColor() method inside componentDidUpdate()
method; it applies color after every changes in the page. So it should work after
every state changes.
