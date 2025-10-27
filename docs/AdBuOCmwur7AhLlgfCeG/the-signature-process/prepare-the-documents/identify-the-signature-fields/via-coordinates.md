# ↗ Via coordinates

A method consists in **indicating the coordinates** of the signature fields on the PDF, together with the page number. In this case, the team of the IO app will insert the signature fields in the indicted points. 

{% hint style="info" %} You must enter this information in the dossier that you will create when requesting the signature: you can find all the information in [Creation of a dossier](../../../create-the-dossier.md).  {% endhint %}

To be able to indicate a section in the PDF where to place the graphic signature rectangle, you must provide:

* the coordinates from a starting point, taking as a reference point the top left edge (the "0.0" you see in the image below);
* the box dimensions; 
* the page where to insert it (remember the pages start from 0).

<figure><img src="../../../.gitbook/assets/Senza titolo-1 (1).png" alt=""><figcaption><p>Coordinates from a starting point</p></figcaption></figure>

### How to calculate the coordinates and dimension of the rectangle

To be able to easily calculate the coordinates and dimensions of the rectangle, we recommend using [GIMP](https://www.gimp.org/downloads/), a free open source tool available for all operating systems. 

Proceed as follows:

* download [GIMP](https://www.gimp.org/downloads/) from the official website and proceed with installation;
* open GIMP;
* select File > Open and open the PDF module or template to send to be signed;
* if the PDF has more than one page, select the one where the graphic signature should be displayed;
* use the mouse to draw the rectangle in which the user must place their signature, starting from the top left point of the rectangle;

The information to be indicated will be shown in the fields **Position** and **Dimensions**. Make sure that the unit of measure is set in **points (pt)** both for the position as well as the dimensions.

{% hint style="info" %} Repeat this operation **for each signature field** you want to insert in every single page. {% endhint %}

<figure><img src="../../../.gitbook/assets/gimp (1).png" alt=""><figcaption></figcaption></figure>

Based on the above example, the `attrs` property of the dossier will be as follows (the decimal part can be ignored):

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

{% hint style="warning" %} Make sure that the signature field does not go beyond the entire page.  
When uploading the PDF, the software checks in any case that the coordinates are correct. {% endhint %}