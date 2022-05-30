# NFT's for artists

*`HomePage`*
-   `Gallery`
    -   Default sorted by activity over the last day
-   Latest `Carousel`
    -   Sorted by most recently created
- Just Sold `Carousel`
  - Sorted by most recently sold
- Sorted by Topics `Carousel`
-

*`Artwork Page`*
-   *Inherit* state from the Homepage
-   Artwork information | story
-   Scaled down resolution photo and option to view native.
    -   `Buy`
        -   Allow users to buy the piece of artwork
    - `Download`
    -  `Topics`

*`Search Page`*
-   `Gallery`
    -   Default by most activity over the last week
        - Filters for most recent | popular this month | popular all-time
- `Pagination` component

*`User page`*
-   `User info` component | About?
    -   Username
    -   birthday
    -   country
    -   member since
    -   links
    -   `Biography` component | rich text editor
    -   `Comments` component
        -   Total comments rounded to the hundreth
-   `Gallery` component
    -   default sorted by user selected `featured` | display number of featured
        -   Allow sorting by all, most popular, and user created.

*`Checkout page`*

## Components | Subject to change
`Gallery`
`Carousel`
`Buy`
`Topics`
`Pagination`
`Comments`
`Navbar`

## Routes

User
- `Get` user by ID
- `Post` create new user
- `Patch` edit user by ID
- `Delete` user by ID
