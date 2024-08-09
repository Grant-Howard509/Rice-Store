# Rice Store

## Motivation

As the bass player for the band Rice, I always loved to tour and meet people from all walks of life. But, tours are not cheap and can quickly become expensive.

Merchandise is one of the best ways any musician can provide value to fans, while also avoiding going broke on tour.

Having one centralized location where fans can buy our products would be ideal for the following reasons:

1. All merchandise does not need to tour with the band.
2. People unable to buy their favorite design at the show can do so at home.
3. Print-on-demand is available.

There are many Shopify themes to choose from, so why go headless in the first place?

I have seen many artists around my area use Shopify themes which is great! But for our band Rice, the goal is simple: provide the highest quality experience to the fans no matter what.

Having a headless website allows us to fully customize our shop in ways we could not be able to with a theme. This adds another layer of interaction between our storefront and our supporters.

## First step: Creating a home page

The band has decided to create a hybrid band page and shop.

Our first step is to create a well-designed band page with the following sections in mind:

- Music section with a link to our new single `Slow Down`.
- Custom tour section which will utilize Google Sheets so bandmates can easily enter new events.
- About section which will act as an EPK listing all the band members and accomplishments.
- Contact section so promoters and fans can get a hold of the band for bookings.

Current figma design can be seen [here](https://www.figma.com/design/WOcznoNGbjFjQNtNG3Y2D7/Rice-Merch-Shop?node-id=0-1&t=OSDyPijc4s2YYJMo-0).

## Navigation

The navigation will contain all sections as standard anchor tags. When a link is clicked, the user will simply be scrolled to that section on the page.

The `Shop` navigation link will be the only separate page in this project. To do this, we will use `react-router` for client side routing.

For now, the `Shop` page will just contain a white background displaying the text `Coming soon...` with a button that will send the user back to the home page.

Eventually, the `Shop` page will contain all our products, their prices, a working cart and checkout using `Shopify Storefront API`.
