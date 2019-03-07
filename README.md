# drinkstagram2

The cool thing is that the popup-larger-image will remain in focus on the page.  If you narrow the screen and then scroll down, then click on an image, the image will still appear in full view (not chopped at the top)
I'm doing this by grabbing the window.yoffset value and repositioning my popup big picture based on that.  Otherwise, it was always in the same position at the top.
However, I'm doing an inline style assignment from JS to HTML.  Is this kosher?  or is better to use CSS variables?

I created a div container for my big picture to force the aspect ratio.  But, this meant I had to use hidden on BOTH div classes.  If I left if off the border was still visibile.  This is becaue I'm forcing the size of the big image, so even thought the src is empty, it still has a shape.
