# React-Redux Alışveriş Sepeti Uygulaması

Bu projede tepki ve redux bilgisi olan bir Shopping Cart uygulamasını düzelteceksiniz. Kodun bazı bölümleri eksik ve sayfa şu anda çalışmıyor.

src klasörünüzde bunun gibi klasörleriniz ve dosyalarınız var;

Değişiklik yapabilirsiniz, ancak yapıyı korumanız önerilir.

Bu, uygulamanın çalışma yoludur; “https://tafatsum.github.io/shopping-cart/”.

Dosyaların bazı kısımlarını, bazı kodları verdiniz, aşağıdaki hikayeleri elde etmek için herhangi bir değişiklik yapmaktan çekinmeyin.

Hikayeler:

Bir kullanıcı olarak web sayfasındaki tüm ürünleri alt alta liste halinde görebiliyorum. Her üründe “isim”, “fiyat” ve “kimlik(envanter)” bulunmalı ve ayrıca “Sepete Ekle” butonu bulunmalıdır.
2.
Bir kullanıcı olarak, listedeki her ürün için (envanter yeterliyse) "Sepete Ekle" düğmesini tıklayabilmeliyim. Ürün stokta yoksa "Sepete Ekle" butonu devre dışı bırakıldı.
3.
Bir kullanıcı olarak, "Sepete Ekle" butonuna her tıklama ile;
• Kalem stokunun azalması,
• Ürün sepete eklendi.
4.
Bir kullanıcı olarak, sepet bölümünde “eklenen her ürün”, “Toplam Fiyat” ve “Ödeme” butonunu görmem gerekiyor. Öğe yoksa varsayılan metin yazmalıdır; "Lütfen sepete bazı ürünler ekleyin."
5.
Bir kullanıcı olarak, "isim", "fiyat" ve "miktar" olan öğeleri görmek isterim,
6.
Kullanıcı olarak, Sepete Ekle butonuna her tıkladıktan sonra, sepet bölümünde;
• Ürün sepete eklendi.
• Sepette ürün varsa adet artar,
• Toplam Fiyat, eklenen ürün fiyatına göre değişir.
7.
Kullanıcı olarak “Ödeme” butonuna tıkladıktan sonra sepet bölümü boşalır. Mevcut (son) ürün stokları ile yeni alışverişe başlayabilirsiniz.
Ürün tükendiyse satın alamazsınız (sayfa yenilenene kadar).

İyi şanslar…

---

# React-Redux Shopping Cart Application

In this Project you will fix a Shopping Cart application with the knowledge of react and redux.
Some parts of the code is missing and the page is not working now.

You have folders and files in your src folder like this;

You can make changes, but it is recommended to keep structure.

This is the working path of application; “[https://tafatsum.github.io/shopping-cart/](https://tafatsum.github.io/shopping-cart/)”.

You have given some parts of the files, some codes, feel free to make any changes to achive the
stories below.

**Stories:**

**1.**

As a user, i can see all products as a list on the web page, under each others. Every item
should have “name”, “price” and “identity(inventory)” and also should have an “Add
to Cart” button.

**2.**

As a user, i should able to click “Add to Cart” button for every item on the list (if
inventory is enough). If item out of stock, “Add to Cart” button got disabled.

**3.**

As a user, with every click for “Add to Cart” button;

·
Inventory of item decrease,

·
Item added to cart.

**4.**

As a user, i sould see “every added item”, “Total Price” and a “Checkout” button inside cart
section. If there is no item it should write default text ; “ *Please add some products to cart.* ”

**5.**

As a user, i sould see items with “name”, “price” and “quantity”,

**6.**

As a user, after every click for “Add to Cart” button, inside cart section;

·
Item added to cart.

·
If item has alreadey in cart, quantity of item increase,

·
Total Price changes according to the added item’s price.

**7.**

As a user, after clicking for “Checkout” button, cart section become empty. You can start with new
shopping with the current (last) inventories of items.

If item sold out, you can not buy it (until refreshing the page).

**Good Luck…**
