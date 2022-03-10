# React-Redux Yapılacaklar Başvurusu

**1.**

İçinde bu proje sen niyet Yapılacaklar oluştur _ başvuru ile birlikte en redux bilgisi . _

Sen sahip olmak bileşenler dosya bir App.js ile , Liste.js  ve ListItem.js dosyalar ;

İlk önce bir redüktör oluşturundosya bir todoListReducer.js dosyasıyla ;

Ve mağaza oluştur _ dosya bir index.js dosyası ile .

En sonunda eylem oluştur _ dosya updateList.js dosyasıyla . _

**2.**

İçinde senin eylem dosyası oluştur değişkenler ile her biri eylem yazın ( EKLE, DÜZENLE, SİL). Sonrasında o yaratmak fonksiyonlar için her biri tür . Her işlev İadeler tür ( kullan senin değişkenler sen sadece oluşturuldu ).

ekle Yapılacaklar işlev meli Ayrıca dönüş içerik ( alın _ _parametre ).

silmekTodo işlev meli Ayrıca dönüş dizin numara ( alın _ _ parametre ).

editTodo işlev meli Ayrıca dönüş dizin numara ve içerik ( al ikisi birden itibaren parametre ).

**3.**

İçinde senin redüktör dosyası bir işlev oluştur o Güncelleme belirtmek, bildirmek ile birlikte eylem türleri ( EKLE, DÜZENLE, SİL ). Vermek ilk belirtmek, bildirmek ile boş dizi . Böyle Biz niyet Ekle silmek ve Güncelleme bizim yapmak bir dizideki liste ( _ işlev binaen ile bu ).

**4.**

İçinde senin depo dosyası oluştur senin mağaza ve ihraç et.

**5.**

sarın _ uygulama ( Uygulama ) çevresinde en sağlayıcımız _ _ *kaynak* dosya index.js .

**6.**

Haydi nihayet Git içine bizim App.js ve bağlamak ile senin mağaza . (mapStateToProps , mapDispatchToProps )

**7.**

Şimdi Biz ihtiyaç ile yapı bizim bileşen kısım. İçinde senin Uygulama bileşen göndermek senin belirtmek, bildirmek ve yöntemler ile en  < Liste /> bileşen _

**8.**

O zamanlar bir devlet oluştur ile Tut senin giriş akım değer . Ne zaman sen Tıklayın ile en düğme , gönder Bugün nasılsın akım değer ile senin mağaza .

**9.**

Kullanmak senin yapmak öğeler belirtmek, bildirmek ile karar ver Hangi bileşen meli zerinde görünmek _ sayfa . boşsa göster _ _ _  < Liste Yok /> bileşen ; değilse göster _ < Liste /> bileşen _

**10.**

İçinde senin < Liste /> bileşen , harita senin yapmak liste içerik ve göndermek her biri kalem ile en < Liste Öğesi /> bileşen _ Yaratmak ve kimlik gönder _ sayı .

Ayrıca unutma _ ile göndermek senin yöntemler ile en  < ListeItem/> .

**11.**

çünkü bizim _ harita yöntem , her yapmak liste kalem < ListItem / > ol bileşen _ İçinde senin < Liste Öğesi /> bileşen , bir durum oluştur ve eşit olarak ayarla ile senin yapmak liste akım öğe . Ve bunu da göster senin içinde devlet < yayılma > öğe.

**12.**

Yaptı sen fark ? İçinde senin < span

> " contentEditable
> ={ true } " öğesi eleman düzenlenebilir _ bir girdi gibi alan .

Yani , bir olay kullanın işleyici ve Güncelleme senin belirtmek, bildirmek ne zaman sen Düzenle < yayılma

> .

**13.**

Yaratmak Etkinlik işleyiciler için en Güncelleme ve silmek düğmeler .

**14.**

Kullanmak dizin argüman olarak sayı için silmek yöntem ve _ kullanmak dizin
numara ve akım argüman olarak belirtmek için Güncelleme yöntem . ( Hatırla
senin eylem fonksiyonlar ihtiyaç bunlar parametreler )

**15. Meydan Okuma**

·
Yaratmak onay
kutusu yakın her biri öğe . Ne zaman sen tıklayın , olacak geçmek dışarı en öğe
( için bitmiş olarak simüle öğe ).

·
Eğer sen
Güncelleme öğe , olacak haline gelmek aktif .

**Tebrikler …**

---

# React-Redux ToDo Application

**1.**

In this Project
you will create a ToDo application with the knowledge of redux.

You have components folder with a App.js , List.js  and ListItem.js files;

First Create a reducers folder with a todoListReducer.js file;

And create a store folder with a index.js file.

Finally create a action folder with a updateList.js file.

**2.**

In your action
file create variables to each action type (ADD, EDIT,
DELETE) . After that creat functions for each type. Every
function returns type (use your variables you just created).

addTodo function should also return content (take it from parameter).

deleteTodo function should also return index number (take it from parameter).

editTodo function should also return index number and content (take both from parameter).

**3.**

In your reducer
file create a function that update state with action types (ADD, EDIT, DELETE). Give initial state to empty array. So we will add
delete and update our todo list in an array (form your function according to
this).

**4.**

In your store file
create your store and export it.

**5.**

Wrap our
application (App) around the Provider in our *src* folder index.js.

**6.**

Let’s finally go
into our App.js and connect to your store. (mapStateToProps, mapDispatchToProps)

**7.**

Now we need to build
our component part.

In your App
component send your state and methods to the  `<List/>` component.

**8.**

Then create a
state to keep your input current value. When you click to the button, send this
current value to your store.

**9.**

Use your todo items
state to decide which component should appear on the page. If it is empty, show  `<NoList />` component; if it is not, show `<List />` component.

**10.**

In your `<List />` component, map your todo list content and send each
item to the `<ListItem />` component. Create and send an id number.

Also, do not forget
to send your methods to the  `<ListItem />`.

**11.**

Because of our map
method, every todo list item become a `<ListItem />` component.

In your `<ListItem />` component, create a state and set it equals to your
todo list current item. And also Show this state in your `<span>` element.

**12.**

Did you notice? In your `<span>` element “contentEditable={true}” makes the element editable like an input field.

So, use an event handler and update your state when you edit `<span>`.

**13.**

Create event handlers for the update and delete buttons.

**14.**

Use index number as an argument for delete method, and use index number and
current state as arguments for update method. (Remember your action functions
need these parameters)

**15. Challange**

·
Create checkbox near each item. When you click it, it will
cross out the item (to simulate as a finished item).

·
If you update item, it will become active.

**Congragulations…**
