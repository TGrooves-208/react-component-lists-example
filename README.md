# Example of using component lists in React
There are common practices that we use that can benefit how we tackle problems associated with keys. 
Often we will come across code and investigating the dev console we will see errors that are tricky to debug. 
Things to be mindful of are as follows:
- Keep keys unique
- Using an index for mapped keys should be used as a last resort
- Implementing a Fragment will remove key props resulting in an error
- Implementing a Fragment by importing it will all us to address any key warnings in the console

Unique Key Error (This appears when we have no key on the component that is being rendered, mapping functions surface these errors)
![react-lists-unique-key-error](https://user-images.githubusercontent.com/5911897/210111940-0686872d-2674-4435-9226-734fcbd4d5ba.PNG)


Duplicate Key Error (When keys are not unique and the same key is used, indexing is a workaround but use with caution)
![react-component-lists-duplicate-key-error](https://user-images.githubusercontent.com/5911897/210111947-d9541ab1-eb06-482c-bec8-c92e4142e4a7.PNG)
