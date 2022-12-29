# denis
My portfolio website

# bug01
- theme change button does not work @media width<=500
--why
--there are two theme buttons with the same id
- javascript accesses the first button with the specified id in normal flow
- therefore, the second button is ignored
# solution
- id for second button changed and accessed separately;


