# REACT YETKİLENDİRME

Bu projede, basit bir yetkilendirme katmanı oluşturmak için bir React bileşeni kullanarak yetkilendirme formunu tamamlayacaksınız.
Hedefleriniz;
• Şifreyi doğru girdiyseniz, uygulama size kişisel kartınızı gösterir; giriş ve gönder düğmesi kaybolur, sayfada kullanıcı profili görüntülenir (ancak siz doğru şifreyi girene kadar gizlenmelidir!). İletişim bilgileri App.js dosyanızdadır.
• Şifreyi 3 kez yanlış girdiyseniz, giriş ve gönder butonları 30 saniye ile devre dışı kalır, 30 saniye sonra tekrar aktif hale gelir. Ayrıca kullanıcıya uyarı mesajları verin.

Başlayalım!
Uygulamanızı başlatın ve bir giriş sayfası göreceksiniz ama çalışmıyor.
Kod düzenleyicisine bakın. Bir Login bileşen sınıfı görebilirsiniz. Giriş kodu bloğunu döndürür.

Login.js dosyasında; bir kontak değişkeni (JSX ifadesi) oluşturun ve bunu bir kod bloğuna atayın. “card” adlı bir div sınıfıyla başlayın ve diğer bilgileri ekleyin (Tıpkı üçüncü Proje : Kişiler Projesi'nde yaptığımız gibi. İPUCU: aynı sınıf adlarını kullanın).

Bir yapıcı() yöntemi oluşturabilirsiniz. Inside yöntemi, varsayılan "false" değeriyle "yetkili" bir durum oluşturun. this.state.authorized ifadesini çalıştırarak bir kullanıcının doğru şifreyi girip girmediğini kontrol edeceksiniz.
3.
Yetkili duruma göre (doğru veya yanlış); h1 öğesinde “Şifreyi Girin” veya “İletişim Profili” döndürün. Üçlü bir operatör kullanın. h1 öğesinin değiştiğini görmek için durumu doğru ve yanlış olarak değiştirin.
4.
Şimdi aynısını JSX ifadeleri için yapın; h1 öğenizin altındaki giriş veya iletişim kodu bloğu.
Farklı kombinasyonlar görmeyi başarırsanız, kodunuz çalışıyordur, bu nedenle bir sonraki adım için varsayılan olarak yetkili “yanlış” olarak ayarlayın.
5.
Bu durumu doğru şifre ile değiştirmemiz gerekiyor.
Bu yüzden checkAuthorize() adlı bir yöntem oluşturun. Bu, gönderilen bir parolanın girilip girilmediğini kontrol etmelidir. Eğer öyleyse, bu.durum.yetkili gerçek olacaktır.
6.
İlk olarak input adında yeni bir durum oluşturun ve giriş değerinizi olay işleyicisi (onchange veya oninput) yardımıyla kaydedin.
7.
Bir kullanıcı “Gönder!”i tıkladığında çağrılmak için checkAuthorize()'a ihtiyacınız var.

<form> öğesine bir onSubmit niteliği verin. Özniteliğin değerini checkAuthorize() yöntemine eşit olarak ayarlayın.

Yanlış bir şifre girip "Gönder"e basmayı deneyin. Hiçbir şey olmamalı.
Şimdi doğru şifreyi girmeyi deneyin, ekranınız değişmeli!

Yani kodunuz çalışıyor, üç kez yanlış şifre girmeye ne dersiniz? "3" varsayılan değeriyle bir durum "sayıcı" oluşturun.
10.
Bir kullanıcının parola girmeye izin verip vermediğini kontrol edeceksiniz. Kullanıcı yanlış şifre girerse sayacı -1 yapın. Sayaç “0” ise bu değeri kullanarak girişi ve butonu devre dışı bırakın.
İPUCU: 3. ve 4. adımları yaptığımız gibi üçlü kullanın.
11.
Son olarak bir enableInput() yöntemi ekleyin ve düğmeyi devre dışı bıraktıktan sonra bu yöntemi çağırın. (veya checkAuthorize() içinde değişiklik yapın).
12.
enableInput() yönteminin içine bir settimeout ekleyin ve 30 saniye sonra sayacı varsayılan değerine değiştirin.

Tebrikler!

---

# REACT AUTHORIZATION

In this project, you’ll
accomplish authorization form by using a React component to set up a simple
authorization layer.

Your goals are;

·
If you entered correct password, app shows you personal card; input
and submit button dissappears, user profile displays on the page (but it should
be hidden until you enter a correct password!). The contact info is in your
App.js file.

·
If you entered wrong password 3 times, input and submit button
goes disabled with 30 seconds, after 30 seconds they become active aqain. Give
alert messages to the user also.

Let’s
get started!

Start your app and you
will see a login page but it doesnt work.

Look in the code editor. You can see a `<span>Login</span>` component class. It
returns `<span>login </span>`code block.

**1.**

In Login.js file; create a `<span>contact</span>` variable (JSX expression) and assign it to a code block. Start
with a `<span>div</span>` class
named “`<span>card</span>`” and
add other knowledge (Just like we did in third Project : Contacts Project.
HINT: use same class names).

**2.**

You may create a `<span>constructor()</span>` method.
Inside method create a `<span>state</span>` “authorized”
with the default value of “false”. You will check whether a user has entered
the right password by running the expression `<span>this.state.authorized</span>`.

**3.**

According to `<span>authorized</span>` state
(true or false); return “Enter The Password” or “Contact Profile” in the `<span>h1</span>`
element. Use a ternary operator. Change state to true and false to see the `<span>h1</span>`
element is changing.

**4.**

Now, do the same for JSX expressions; `<span>login</span>` or `<span>contact</span>` code
block under your `<span>h1</span>` element.

If you achieve to see different
combinations, your code is working, so set authorized “false” by default for
next step.

**5.**

We need to change this state with the correct password.

So create a method
named `<span>checkAuthorize().</span>` This should
check whether a submitted password is entered. If it is, then `<span>this.state.authorized</span>` will
become `<span>true</span>`.

**6.**

First, create a new state named `<span>input</span>` and
store your input value with the help of event handler (onchange or oninput).

**7.**

You need `<span>checkAuthorize()</span>` to
get called whenever a user clicks “Submit!”

Give the `<span><form></span>` an `<span>onSubmit</span>` attribute.
Set the attribute’s *value* equal
to the `<span>checkAuthorize()</span>` method.

**8.**

Try entering an
incorrect password and hitting ‘Submit.’ Nothing should happen.

Now try entering correct
password, your screen should change!

**9.**

So your code is
working, what about entering false password three times. Create a state “counter”
with the default value of “3”.

**10.**

You will check whether
a user has permitted entering password. If user enters wrong password make
counter -1. If counter equals to “0” disable input and button by using this
value.

HINT: Use ternary just
like we did 3~rd~ and 4~th~ steps.

**11.**

Finally add an `<span>enableInput()</span>`
method and call this method after you made disabled the button. (or make
changes inside `<span>checkAuthorize()</span>`).

**12.**

Inside `<span>enableInput()</span>`
method, add a settimeout and after 30 seconds change counter to its default value.

Congragulations!
