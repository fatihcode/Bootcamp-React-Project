# Tek dosyada React Basics

Başlamadan önce önemli notlar:
Proje klasörünüzde, oluşturulmakta olan js dosyalarınız var. Onlara dokunmayın.
Reaksiyon uygulaması oluşturmanıza ve bu proje için paket yüklemenize gerek yok.
Ayrıca tepkiden herhangi bir içe aktarmaya ihtiyacınız yok.
Talimatları saklayın.

1. “src” klasörü içinde bir index.js dosyası oluşturun. Bugün sadece bir dosya kullanacağız.
2. React render metodu ile (ReactDOM.render); DOM öğesi "root"a bir "Merhaba Dünya" oluşturun. İPUCU: h1 etiketini kullanın. index.html'nizi canlı sunucu ile çalıştırın ve sayfanızı görün.
3. Şimdi bir değişken oluşturun ve onu dört isimden oluşan bir diziye atayın, farklı isimler seçin.
4. Bu isimleri Hello World bölümünün altında birkaç “p” etiketi ile işleyin. Tüm HTML öğeleri için bir kapsayıcıya (div) ihtiyacınız olabilir.
5. Birkaç “p” etiketi kullanmak yerine, dizinizi eşleştirmeye çalışın ve bu harita işlevi içinde “p” etiketi ile adları oluşturun. DOM'daki sonuçlara bakın.
6. En az 2 HTML öğesinden oluşan yeni bir dizi oluşturun.
   İPUCU: “Tebrikler!” yazabilirsiniz. ve “h2” ve “h3” etiketleriyle “React is awesome”.
7. Bu diziyi (doğrudan dizinin değişkeni) DOM'ye işleyin. (ReactDOM.render'ın içinde)
8. index.js dosyanızda HelloMessage adlı bir sınıf bileşeni oluşturun.
9. Bu bileşenin içinde bir “Bileşenden Merhaba” mesajı oluşturun ve döndürün.
10. Bu bileşeni ReactDOM.render bölümünün içinde çağırın. Sayfanıza bakın.
11. Şimdi ReactDOM.render içindeki tüm DOM manipülelerini kesip HelloMessage bileşenine kopyalayın. HelloMessage'ı ReactDOM.render içinde yalnız bırakın.
12. DOM'unuzun eskisi gibi olduğunu göreceksiniz.
13. Ardından, “Uygulama İşlevinden Merhaba” döndüren “Uygulama” adında bir işlev oluşturun; div ve h2 öğelerini kullanın.
14. HelloMessage'dan sonra bu bileşeni ReactDOM.render bölümünden çağırın. Sonucu görün.
15. Şimdi HelloNames adında ikinci bir sınıf bileşeni oluşturun.
    HelloMessage'dan HelloNames'e ad dizi haritası bölümünü kesin ve kopyalayın. HelloMessage bileşeni içinde HelloNames'inizi çağırın (oluşturun).
    DOM'da hiçbir fark görmeyeceksiniz.
16. Şimdi, HelloMessage'ınızı ReactDOM.render'dan kesin ve Uygulama işlevinde kopyalayın. Uygulamayı ReactDOM.render içinde tek başına tutun.
17. Bir dizi oluşturduğunuzu ve döndürdüğünüzü unutmayın (6. adımda). Şimdi HelloMessage bileşeninizdeki bu diziyi silin (veya kapatın).
18. Uygulama işlevinizin içinde ve bu diziyi (dizinizin global bir değişkeni olduğunu unutmayın) bir özelliği ile HelloMessage bileşenine gönderin. Mülkünüze istediğiniz herhangi bir isim verebilirsiniz.
19. Ardından, HelloMessage bileşeninin içinde bu özelliği bir HTML öğesi olarak kullanın (az önce oluşturduğunuz adla).
20. Şimdi, HelloMessage bileşeninizin içinde, Names dizisini HelloNames'e bir özellik olarak gönderin.
21. HelloNames bileşeninde; kodunuzu biraz değiştirin. İsim dizisini eşliyorsunuz. İsimler dizisini doğrudan global değişkenden kullanmak yerine, HelloMessage tarafından gönderilen bu özelliği kullanın.
22. Bir "ol" etiket öğesi döndüren bir NoteList sınıfı bileşeni oluşturun. Şimdi boş bırakın.
23. Bu NoteList bileşenini HelloNames'de bir öğe olarak çağırın; isimler dizisi eşlemesini bir özellik olarak gönderin.
24. NoteList bileşeninin ol öğesinin içinde, konsol bu özelliği günlüğe kaydeder.
25. Bu özellik ile haritayı kullanın. Bu geri aramadaki her öğeyi bir liste öğesi (`<li>`) içinde döndürün. Dönmeden önce, konsol günlüğü öğesini ve inceleyin.
26. Numaralandırılmış DOM üzerinde isimlerinizi göreceksiniz.
27. HelloNames bileşeninizdeki “p” öğenize (geri arama işlevinin değer dizini olarak) bir “key” niteliği ekleyin.
28. Şimdi, NoteList bileşenindeki “li” öğenize key ve class niteliklerini ekleyin. Anahtar, öğenizin anahtarı olmalıdır (“p” öğesi özelliğin içine girer. Bu öğeleri 25. adımda incelerken).
29. .css dosyanızda kurallar vardır. Bunları kullanmak için:
    className niteliği için, anahtar değerine göre bir üçlü oluşturun. “0” ise “birinci”, “1” ise “ikinci”, “2” ise “üçüncü” olmalıdır.
    İPUCU: Kıvrımlı arkalıklar arasında className özniteliğine eşit üçlü kullanabilirsiniz.
30. Son olarak; oluşturmadan önce HelloNames bileşeninizde, bir dize olarak name dizisinin propType'ını gerektiren statik bir propTypes oluşturun. Konsolda bir hata mesajı göreceksiniz. propType'ı bir dizi olarak değiştirin ve farkı görün.

AFERİN…

---

# React Basics in one file

Before starting, important notes:

In your Project folder, you have js files
under build. Do not touch them.

You **dont need to create react app**
and you dont need to load packages for this project.

Also you dont need any import from react.

Just keep instructions.

Create an index.js file inside “src” folder. Today we will
use only one file.

With react render method (ReactDOM.render); render a “Hello
World” in to the DOM element “root”. HINT:Use h1 tag. Run your index.html with
live server and see your page.

Now create a variable and assign it to an array consist of four
names, choose different names.

Render this names under the Hello World section with several “p”
tags. You may need a container (div) for all HTML elements.

Instead of using several “p” tags, try to **map** your array
and render names with “p” tag inside this **map** function. See the results
on the DOM.

Create a new array consist of at least 2 HTML elements.

HİNT: You can write “Congragulations!”
and “React is awesome” with the tags “h2” and “h3”.

Render this array (directly variable of array) to the DOM. (Inside
ReactDOM.render)

In your index.js file create a class component named
HelloMessage.

Inside this component, render and return a “Hello from
Component” message.

Call this component inside ReactDOM.render part. See your page.

Now cut and copy all DOM manipulates in ReactDOM.render to the HelloMessage
component. Just keep HelloMessage alone inside ReactDOM.render.

You will see your DOM is same as before.

Then create a function named “App” that returns “Hello from App Function”;
use div and h2 elements.

Call this component from your ReactDOM.render part after
HelloMessage. See the result.

Now create a second class component named HelloNames.

    Cut
and copy your names array**map** part from HelloMessage to the HelloNames.          Call (render) your HelloNames inside
HelloMessage component.

You will see no difference in DOM.

Now, cut your HelloMessage from ReactDOM.render and copy in App function.
Keep App alone inside ReactDOM.render.

Remember you created an array and returned it (at step 6). Now
delete (or close) this array in your HelloMessage component.

Inside your App function and send that array (remember your array
has a global variable) with a property to the HelloMessage component. You can
name your property anything you want.

Then, inside HelloMessage component use this property as an HTML
element (with the name you just created).

Now, inside your HelloMessage component, send names array as a
property to the HelloNames.

In HelloNames component; change your code little. You are
mapping names array. Instead of using names array directly from global
variable, use this property send by HelloMessage.

Create a NoteList class component that returns an “ol” tag
element. Leave it empty now.

Call this NoteList component as an element in the HelloNames; send
the names array mapping as a property.

Inside NoteList component’s ol element, console log this property.

use map with this property. Return every item in this callback
within a list element (`<li>`). Before return, console log item and
inspect.

You will see your names on the DOM got numbered.

Add a “key” attribute to your “p” element (as value index of
callback function) in your HelloNames component.

Now, add key and class attributes to your “li” element in
NoteList component. Key should be your item’s key (“p” element coming inside
property. As you inspected this items at step-25).

There are rules in your .css file. To use them:

for className attribute, create a ternary
according to the key value. If it is “0” class should be “first”, if it is “1”
class should be “second”, if it is “2” class should be “third”.

HINT: You can use ternary equal to className attribute between curly backets.

Finally; in your HelloNames component before render, create a
static propTypes that require names array’s propType as a string. You will see
an error message in the console. Change propType as an array and see the
difference.

WELL DONE…
