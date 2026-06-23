# ↗️ Using coordinates

One method is to **indicate the coordinates** of the signature fields on the PDF, along with the page number. In this case, the IO app team will insert the signature fields at the specified points.

{% hint style="info" %}
You will need to enter this information in the Dossier you create when requesting the signature: you can find all the instructions in [Creating a Dossier](../../../Creating-the-dossier.md).
{% endhint %}

To indicate a section within the PDF where the graphic signature box should be placed, you must provide:

- the coordinates of a starting point, using the top-left corner as the reference point (the "0,0" you see in the image below);
- the size of the box;
- the page on which to insert it (remember that pages are numbered starting from 0).

<figure><img src="../../../.gitbook/assets/Senza titolo-1.png" alt=""><figcaption><p>Coordinates from a starting point</p></figcaption></figure>

### How to calculate the rectangle's coordinates and size

To easily calculate the rectangle's coordinates and size, we suggest using [GIMP](https://www.gimp.org/downloads/), a free and open-source tool available for all operating systems.

Here are the steps to follow:

- download [GIMP](https://www.gimp.org/downloads/) from the official website and proceed with the installation;
- open GIMP;
- select File > Open and open the PDF form or template to be sent for signature;
- if the PDF has more than one page, choose the one where you want the graphic signature to be displayed;
- with the mouse, draw the rectangle where the user will place their signature, starting from the top-left corner of the rectangle;

The required information will be shown in the **Position** and **Size** fields. Make sure the unit of measurement is set to **Points (pt)** for both the position and the size.

{% hint style="info" %}
Repeat this operation **for each signature field** you want to add to each page.
{% endhint %}

<figure><img src="../../../.gitbook/assets/gimp (1).png" alt=""><figcaption></figcaption></figure>

Based on the example above, the `attrs` property of the dossier will be as follows (the decimal part can be ignored):

```
"attrs":{
   "coordinates":{
      "x":85,
      "y":676
   },
   "size":{
      "w":177,
      "h":77
   },
   "page":0
}
```

{% hint style="warning" %}
Make sure the signature field does not go outside the page boundaries.\
When the PDF is uploaded, the software will check if the coordinates are correct.
{% endhint %}
