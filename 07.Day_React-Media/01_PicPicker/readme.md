# React Resim Seçici

Kapsayıcı bileşenlerini sunum bileşenlerinden ayırmak, popüler bir React programlama modelidir.

Bunun arkasındaki temel fikir şudur: eğer bir bileşenin durumu olması, donanıma dayalı hesaplamalar yapması veya diğer herhangi bir karmaşık mantığı yönetmesi gerekiyorsa, bu bileşenin ayrıca HTML benzeri JSX oluşturması gerekmemelidir.

HTML benzeri JSX oluşturmak yerine, bileşen başka bir bileşen oluşturmalıdır. HTML benzeri JSX'i oluşturmak bu bileşenin işi olmalıdır.

Başlayalım!

Orijinal “src” klasörünüzü Projenin “src” ile değiştirin ve uygulamanızı çalıştırın: npm start
Bu Projede, bir Resim seçici oluşturmak için bileşen bilginizi kullanacaksınız. Hedefleriniz;
• Başlat düğmesine tıkladığınızda, Resim belirli bir zaman aralığı ile sıraya göre değişir.
• Durdur düğmesine tıkladığınızda durur.

ADIMLAR:

1. App.js çok fazla mantık içerir! Aşağı kaydırmadığınız sürece render işlevini bile göremezsiniz. Program componentDidMount() ile çalışır.
   Uygulamayı bir sunum bileşenine ve bir kapsayıcı bileşene bölelim.
   ChoosePicture.js ve ChoosePicture bileşeni adında yeni bir dosya oluşturun. Sunum öğelerinizi ChoosePicture bileşenine yerleştirin (Uygulamadan kesilmiş).
2. Bu bileşeni Uygulamadan arayın. Ve resmin kaynağını bir özellik olarak göndermeyi unutmayın.
3. Şimdi SelectPicture içinde bir başlat ve durdur düğmesi oluşturun.
4. Ardından programınızı componentdidMount yerine butonlara göre yeniden yazın.

Meydan okumak

https://unsplash.com/developers veya https://www.pexels.com/api/ gibi bir resim API sunucusundan bir getirme isteği oluşturun.
Ve bu görüntüleri uygulamanız için kullanın.

Tebrikler!

---

# React Picture Picker

Separating container components from presentational components
is a popular React programming pattern.

Here's the basic idea behind it: if a component has to have
state, make calculations based on props, or manage any other complex logic,
then that component shouldn't also have to render HTML-like JSX.

Instead of rendering HTML-like JSX, the component should render
another component. It should be that component's job to render HTML-like JSX.

Let’s get started!

Change your original “src”
folder with the Project’s “src” and run your application: npm
start

In this Project you
will use your component knowledge to create a Picture picker. Your goals
are;

·
When you click start button, Picture changes by order with a
time period.

·
When you click stop button, it stops.

**STEPS:**

App.js contains a lot of logic! You can't even see the render function unless you scroll down. Program runs with the componentDidMount().

Let's divide App in a presentational component and a container component.

Create a new file named ChoosePicture.js and ChoosePicture component. Put your presentational elements in to the ChoosePicture component (cut from App).

Call this component from App. And dont forget to send the source of image as a property.

Now create a start and stop button inside
ChoosePicture.

Then, rewrite your program according to the buttons, instead of
componentdidMount.

**Challenge**

Create a fetch request
from a image api server like : [https://unsplash.com/developers](https://unsplash.com/developers)
or [https://www.pexels.com/api/](https://www.pexels.com/api/)

And use this images for
your application.

Congragulations!
