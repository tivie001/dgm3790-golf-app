## Music Box :musical_note:
## FEATURES
----------------------------------------------------
1. Initially opening the app one will be prompted to login in to the app using the following 
credentials **(Login Context)** and will be validated using the tools Formik, Yup, & Material UI.
    - First Name (required, cannot be more than 50 characters)
    - Email Address (required, must be a valid email, cannot be more than 50 characters)
    - Password (required, must have more than 8 characters and less than 50)

2. Once logged in, a user can search **(Search Context)** for any **artist, song, album** in the world, which then 
results from the [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)
will be displayed **(from the MusicData Context)**, viewed and song previewed on user interaction.

* The useState, useContext hooks are used in all the components/context providers. 