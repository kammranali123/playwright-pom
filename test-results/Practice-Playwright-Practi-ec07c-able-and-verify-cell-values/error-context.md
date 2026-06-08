# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice.spec.ts >> Playwright Practice Page — 20 Actions >> 19 - Read static table and verify cell values
- Location: tests/Practice.spec.ts:138:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('table').first().locator('tbody tr').first().locator('td').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e15]:
    - generic [ref=e16]:
      - banner [ref=e17]:
        - generic [ref=e23]:
          - heading "Automation Testing Practice" [level=1] [ref=e25]:
            - link "Automation Testing Practice" [ref=e26] [cursor=pointer]:
              - /url: https://testautomationpractice.blogspot.com/
          - paragraph [ref=e28]: For Selenium, Cypress & Playwright
      - list [ref=e35]:
        - listitem [ref=e36]:
          - link "Home" [ref=e37] [cursor=pointer]:
            - /url: http://testautomationpractice.blogspot.com/
        - listitem [ref=e38]:
          - link "Udemy Courses" [ref=e39] [cursor=pointer]:
            - /url: https://www.pavanonlinetrainings.com/#udemy
        - listitem [ref=e40]:
          - link "Online Trainings" [ref=e41] [cursor=pointer]:
            - /url: https://www.pavanonlinetrainings.com/
        - listitem [ref=e42]:
          - link "Blog" [ref=e43] [cursor=pointer]:
            - /url: https://www.pavantestingtools.com/
        - listitem [ref=e44]:
          - link "PlaywrightPractice" [ref=e45] [cursor=pointer]:
            - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
      - generic [ref=e48]:
        - generic:
          - generic [ref=e50]:
            - generic [ref=e51]:
              - generic [ref=e57]:
                - heading "PlaywrightPractice" [level=3] [ref=e58]
                - generic [ref=e59]:
                  - generic [ref=e60]:
                    - heading "1. getByRole() Locators" [level=2] [ref=e61]
                    - paragraph [ref=e62]: Locate elements by their explicit or implicit ARIA roles.
                    - generic [ref=e63]:
                      - generic [ref=e64]:
                        - heading "Buttons" [level=3] [ref=e65]
                        - button "Primary Action" [ref=e66] [cursor=pointer]
                        - button "Toggle Button" [ref=e67] [cursor=pointer]
                        - button "Div with button role" [ref=e68]
                      - generic [ref=e69]:
                        - heading "Form Elements" [level=3] [ref=e70]
                        - generic [ref=e71]: "Username:"
                        - textbox "Username:" [ref=e72]
                        - generic [ref=e73]:
                          - checkbox "Accept terms" [ref=e74]
                          - text: Accept terms
                      - generic [ref=e75]:
                        - heading "Navigation" [level=3] [ref=e76]
                        - navigation [ref=e77]:
                          - list [ref=e78]:
                            - menuitem "Home" [ref=e79]:
                              - link "Home" [ref=e80] [cursor=pointer]:
                                - /url: "#"
                            - menuitem "Products" [ref=e81]:
                              - link "Products" [ref=e82] [cursor=pointer]:
                                - /url: "#"
                            - menuitem "Contact" [ref=e83]:
                              - link "Contact" [ref=e84] [cursor=pointer]:
                                - /url: "#"
                        - alert [ref=e85]: This is an important alert message!
                  - generic [ref=e86]:
                    - heading "2. getByText() Locators" [level=2] [ref=e87]
                    - paragraph [ref=e88]: Locate elements by their text content.
                    - generic [ref=e89]:
                      - paragraph [ref=e90]:
                        - text: This paragraph contains some
                        - strong [ref=e91]: important
                        - text: text that you might want to locate.
                      - paragraph [ref=e92]: Another paragraph with colored text for demonstration.
                    - list [ref=e93]:
                      - listitem [ref=e94]: List item 1
                      - listitem [ref=e95]:
                        - text: List item 2 with
                        - link "link" [ref=e96] [cursor=pointer]:
                          - /url: "#"
                      - listitem [ref=e97]: "Special: Unique text identifier"
                    - generic [ref=e98]:
                      - button "Submit Form" [ref=e99] [cursor=pointer]
                      - paragraph [ref=e100]: Click the button above to submit your information.
                  - generic [ref=e101]:
                    - heading "3. getByLabel() Locators" [level=2] [ref=e102]
                    - paragraph [ref=e103]: Locate form controls by their associated label text.
                    - generic [ref=e104]:
                      - generic [ref=e105]: "Email Address:"
                      - textbox "Email Address:" [ref=e106]
                    - generic [ref=e108]:
                      - text: "Password:"
                      - textbox "Password:" [ref=e109]
                    - generic [ref=e110]:
                      - generic [ref=e111]: "Your Age:"
                      - spinbutton "Your Age:" [ref=e112]
                    - group "Shipping Method" [ref=e113]:
                      - generic [ref=e114]: Shipping Method
                      - generic [ref=e115]:
                        - radio "Standard" [ref=e116]
                        - text: Standard
                      - generic [ref=e117]:
                        - radio "Express" [ref=e118]
                        - text: Express
                  - generic [ref=e119]:
                    - heading "4. getByPlaceholder() Locators" [level=2] [ref=e120]
                    - paragraph [ref=e121]: Locate input elements by their placeholder text.
                    - textbox "Enter your full name" [ref=e123]
                    - textbox "Phone number (xxx-xxx-xxxx)" [ref=e125]
                    - textbox "Type your message here..." [ref=e127]
                    - generic [ref=e128]:
                      - searchbox "Search products..." [ref=e129]
                      - button "Search" [ref=e130] [cursor=pointer]
                  - generic [ref=e131]:
                    - heading "5. getByAltText() Locators" [level=2] [ref=e132]
                    - paragraph [ref=e133]: Locate elements (usually images) by their alt text.
                    - generic [ref=e134]:
                      - img "logo image" [ref=e135]
                      - paragraph [ref=e136]: Playwright Logo
                - generic [ref=e137]:
                  - heading "6. getByTitle() Locators" [level=2] [ref=e138]
                  - paragraph [ref=e139]: Locate elements by their title attribute.
                  - generic [ref=e140]:
                    - paragraph [ref=e141]: "Hover over these elements to see their titles:"
                    - list [ref=e142]:
                      - listitem [ref=e143]:
                        - link "Home" [ref=e144] [cursor=pointer]:
                          - /url: "#"
                      - listitem [ref=e145]: HTML
                      - listitem [ref=e146]: This text has a tooltip
                  - button "Save" [ref=e147] [cursor=pointer]
                - generic [ref=e148]:
                  - heading "7. getByTestId() Locators" [level=2] [ref=e149]
                  - paragraph [ref=e150]:
                    - text: Locate elements by their
                    - code [ref=e151]: data-testid
                    - text: attribute (or other configured attribute).
                  - generic [ref=e152]:
                    - heading "John Doe" [level=3] [ref=e153]
                    - paragraph [ref=e154]: john.doe@example.com
                    - button "Edit Profile" [ref=e155] [cursor=pointer]
                  - generic [ref=e156]:
                    - generic [ref=e157]:
                      - heading "Product A" [level=4] [ref=e158]
                      - paragraph [ref=e159]: $19.99
                    - generic [ref=e160]:
                      - heading "Product B" [level=4] [ref=e161]
                      - paragraph [ref=e162]: $29.99
                    - generic [ref=e163]:
                      - heading "Product C" [level=4] [ref=e164]
                      - paragraph [ref=e165]: $39.99
                  - navigation [ref=e166]:
                    - list [ref=e167]:
                      - listitem [ref=e168]:
                        - link "Home" [ref=e169] [cursor=pointer]:
                          - /url: "#"
                      - listitem [ref=e170]:
                        - link "Products" [ref=e171] [cursor=pointer]:
                          - /url: "#"
                      - listitem [ref=e172]:
                        - link "Contact" [ref=e173] [cursor=pointer]:
                          - /url: "#"
                - contentinfo [ref=e174]:
                  - paragraph [ref=e175]: This page demonstrates various Playwright locators for testing purposes.
                  - button "↑ Top" [ref=e176] [cursor=pointer]
              - link "Home" [ref=e180] [cursor=pointer]:
                - /url: https://testautomationpractice.blogspot.com/
              - generic [ref=e182]:
                - text: "Subscribe to:"
                - link "Posts (Atom)" [ref=e183] [cursor=pointer]:
                  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
            - generic [ref=e184]:
              - heading "Upload Files" [level=2] [ref=e185]
              - generic [ref=e186]:
                - generic [ref=e187]:
                  - button "Choose File" [ref=e188]
                  - button "Upload Single File" [ref=e189] [cursor=pointer]
                - paragraph
                - generic [ref=e190]:
                  - button "Choose File" [ref=e191]
                  - button "Upload Multiple Files" [ref=e192] [cursor=pointer]
                - paragraph
            - generic [ref=e193]:
              - heading "Static Web Table" [level=2] [ref=e194]
              - table [ref=e196]:
                - rowgroup [ref=e197]:
                  - row "BookName Author Subject Price" [ref=e198]:
                    - columnheader "BookName" [ref=e199]
                    - columnheader "Author" [ref=e200]
                    - columnheader "Subject" [ref=e201]
                    - columnheader "Price" [ref=e202]
                  - row "Learn Selenium Amit Selenium 300" [ref=e203]:
                    - cell "Learn Selenium" [ref=e204]
                    - cell "Amit" [ref=e205]
                    - cell "Selenium" [ref=e206]
                    - cell "300" [ref=e207]
                  - row "Learn Java Mukesh Java 500" [ref=e208]:
                    - cell "Learn Java" [ref=e209]
                    - cell "Mukesh" [ref=e210]
                    - cell "Java" [ref=e211]
                    - cell "500" [ref=e212]
                  - row "Learn JS Animesh Javascript 300" [ref=e213]:
                    - cell "Learn JS" [ref=e214]
                    - cell "Animesh" [ref=e215]
                    - cell "Javascript" [ref=e216]
                    - cell "300" [ref=e217]
                  - row "Master In Selenium Mukesh Selenium 3000" [ref=e218]:
                    - cell "Master In Selenium" [ref=e219]
                    - cell "Mukesh" [ref=e220]
                    - cell "Selenium" [ref=e221]
                    - cell "3000" [ref=e222]
                  - row "Master In Java Amod JAVA 2000" [ref=e223]:
                    - cell "Master In Java" [ref=e224]
                    - cell "Amod" [ref=e225]
                    - cell "JAVA" [ref=e226]
                    - cell "2000" [ref=e227]
                  - row "Master In JS Amit Javascript 1000" [ref=e228]:
                    - cell "Master In JS" [ref=e229]
                    - cell "Amit" [ref=e230]
                    - cell "Javascript" [ref=e231]
                    - cell "1000" [ref=e232]
            - generic [ref=e233]:
              - heading "Dynamic Web Table" [level=2] [ref=e234]
              - generic [ref=e235]:
                - table [ref=e236]:
                  - rowgroup [ref=e237]:
                    - row "Name Disk (MB/s) Network (Mbps) CPU (%) Memory (MB)" [ref=e238]:
                      - columnheader "Name" [ref=e239]
                      - columnheader "Disk (MB/s)" [ref=e240]
                      - columnheader "Network (Mbps)" [ref=e241]
                      - columnheader "CPU (%)" [ref=e242]
                      - columnheader "Memory (MB)" [ref=e243]
                  - rowgroup [ref=e244]:
                    - row "Firefox 0.33 MB/s 8.1 Mbps 5.2% 61.2 MB" [ref=e245]:
                      - cell "Firefox" [ref=e246]
                      - cell "0.33 MB/s" [ref=e247]
                      - cell "8.1 Mbps" [ref=e248]
                      - cell "5.2%" [ref=e249]
                      - cell "61.2 MB" [ref=e250]
                    - row "Chrome 0.46 MB/s 2.1 Mbps 3.1% 33.0 MB" [ref=e251]:
                      - cell "Chrome" [ref=e252]
                      - cell "0.46 MB/s" [ref=e253]
                      - cell "2.1 Mbps" [ref=e254]
                      - cell "3.1%" [ref=e255]
                      - cell "33.0 MB" [ref=e256]
                    - row "System 0.47 MB/s 6.9 Mbps 9.3% 90.9 MB" [ref=e257]:
                      - cell "System" [ref=e258]
                      - cell "0.47 MB/s" [ref=e259]
                      - cell "6.9 Mbps" [ref=e260]
                      - cell "9.3%" [ref=e261]
                      - cell "90.9 MB" [ref=e262]
                    - row "Internet Explorer 0.16 MB/s 1.6 Mbps 5.2% 73.2 MB" [ref=e263]:
                      - cell "Internet Explorer" [ref=e264]
                      - cell "0.16 MB/s" [ref=e265]
                      - cell "1.6 Mbps" [ref=e266]
                      - cell "5.2%" [ref=e267]
                      - cell "73.2 MB" [ref=e268]
                - generic [ref=e269]:
                  - paragraph [ref=e270]:
                    - text: "CPU load of Chrome process:"
                    - strong [ref=e271]: 3.1%
                  - paragraph [ref=e272]:
                    - text: "Memory Size of Firefox process:"
                    - strong [ref=e273]: 61.2 MB
                  - paragraph [ref=e274]:
                    - text: "Network speed of Chrome process:"
                    - strong [ref=e275]: 2.1 Mbps
                  - paragraph [ref=e276]:
                    - text: "Disk space of Firefox process:"
                    - strong [ref=e277]: 0.33 MB/s
            - generic [ref=e278]:
              - heading "Pagination Web Table" [level=2] [ref=e279]
              - generic [ref=e281]:
                - table [ref=e282]:
                  - rowgroup [ref=e283]:
                    - row "ID Name Price Select" [ref=e284]:
                      - columnheader "ID" [ref=e285]
                      - columnheader "Name" [ref=e286]
                      - columnheader "Price" [ref=e287]
                      - columnheader "Select" [ref=e288]
                  - rowgroup [ref=e289]:
                    - row "1 Smartphone $10.99" [ref=e290]:
                      - cell "1" [ref=e291]
                      - cell "Smartphone" [ref=e292]
                      - cell "$10.99" [ref=e293]
                      - cell [ref=e294]:
                        - checkbox [ref=e295]
                    - row "2 Laptop $19.99" [ref=e296]:
                      - cell "2" [ref=e297]
                      - cell "Laptop" [ref=e298]
                      - cell "$19.99" [ref=e299]
                      - cell [ref=e300]:
                        - checkbox [ref=e301]
                    - row "3 Tablet $5.99" [ref=e302]:
                      - cell "3" [ref=e303]
                      - cell "Tablet" [ref=e304]
                      - cell "$5.99" [ref=e305]
                      - cell [ref=e306]:
                        - checkbox [ref=e307]
                    - row "4 Smartwatch $7.99" [ref=e308]:
                      - cell "4" [ref=e309]
                      - cell "Smartwatch" [ref=e310]
                      - cell "$7.99" [ref=e311]
                      - cell [ref=e312]:
                        - checkbox [ref=e313]
                    - row "5 Wireless Earbuds $8.99" [ref=e314]:
                      - cell "5" [ref=e315]
                      - cell "Wireless Earbuds" [ref=e316]
                      - cell "$8.99" [ref=e317]
                      - cell [ref=e318]:
                        - checkbox [ref=e319]
                - list [ref=e320]:
                  - listitem [ref=e321]:
                    - link "1" [ref=e322] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e323]:
                    - link "2" [ref=e324] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e325]:
                    - link "3" [ref=e326] [cursor=pointer]:
                      - /url: "#"
                  - listitem [ref=e327]:
                    - link "4" [ref=e328] [cursor=pointer]:
                      - /url: "#"
          - generic:
            - generic:
              - complementary
          - complementary [ref=e331]:
            - generic [ref=e332]:
              - generic [ref=e333]:
                - heading "Tabs" [level=2] [ref=e334]
                - generic [ref=e337]:
                  - link [ref=e339] [cursor=pointer]:
                    - /url: https://wikipedia.org/wiki/
                    - img [ref=e340]
                  - generic [ref=e341]:
                    - textbox [ref=e343]
                    - button "Submit" [ref=e345]
              - generic [ref=e347]:
                - heading "Dynamic Button" [level=2] [ref=e348]
                - button "START" [ref=e350] [cursor=pointer]
              - generic [ref=e351]:
                - heading "Alerts & Popups" [level=2] [ref=e352]
                - generic [ref=e353]:
                  - button "Simple Alert" [ref=e354] [cursor=pointer]
                  - button "Confirmation Alert" [ref=e355] [cursor=pointer]
                  - button "Prompt Alert" [ref=e356] [cursor=pointer]
                  - paragraph
              - button "New Tab" [ref=e359] [cursor=pointer]
              - button "Popup Windows" [ref=e364] [cursor=pointer]
              - generic [ref=e365]:
                - heading "Mouse Hover" [level=2] [ref=e366]
                - generic [ref=e367]:
                  - paragraph [ref=e368]: Move the mouse over the button to open the dropdown menu.
                  - button "Point Me" [ref=e370] [cursor=pointer]
              - generic [ref=e371]:
                - heading "Double Click" [level=2] [ref=e372]
                - generic [ref=e373]:
                  - text: "Field1:"
                  - textbox [ref=e374]: Hello World!
                  - text: "Field2:"
                  - textbox [ref=e375]
                  - button "Copy Text" [ref=e376] [cursor=pointer]
                  - paragraph [ref=e377]: Double click on button, the text from Field1 will be copied into Field2.
              - generic [ref=e378]:
                - heading "Drag and Drop" [level=2] [ref=e379]
                - generic:
                  - paragraph [ref=e381]: Drag me to my target
                  - paragraph [ref=e383]: Drop here
              - generic [ref=e384]:
                - heading "Slider" [level=2] [ref=e385]
                - paragraph [ref=e387]:
                  - generic [ref=e388]: "Price range:"
                  - textbox "Price range:" [ref=e389]: $75 - $300
              - generic [ref=e394]:
                - heading "SVG Elements" [level=2] [ref=e395]
                - generic [ref=e397]:
                  - img [ref=e398]
                  - img [ref=e400]
                  - img [ref=e402]
              - generic [ref=e404]:
                - heading "Scrolling DropDown" [level=2] [ref=e405]
                - textbox "Select an item" [ref=e407]
              - generic [ref=e408]:
                - heading "Labels And Links" [level=2] [ref=e409]
                - generic [ref=e411]:
                  - generic [ref=e412]:
                    - heading "Mobile Labels" [level=4] [ref=e413]
                    - generic [ref=e414]: Samsung
                    - generic [ref=e415]: Real Me
                    - generic [ref=e416]: Moto
                  - generic [ref=e417]:
                    - heading "Laptop Links" [level=4] [ref=e418]
                    - link "Apple" [ref=e419] [cursor=pointer]:
                      - /url: https://www.apple.com/
                    - link "Lenovo" [ref=e420] [cursor=pointer]:
                      - /url: https://www.lenovo.com/
                    - link "Dell" [ref=e421] [cursor=pointer]:
                      - /url: https://www.dell.com/
                  - generic [ref=e422]:
                    - heading "Broken Links" [level=4] [ref=e423]
                    - link "Errorcode 400" [ref=e424] [cursor=pointer]:
                      - /url: http://www.deadlinkcity.com/error-page.asp?e=400
                    - link "Errorcode 401" [ref=e425] [cursor=pointer]:
                      - /url: http://www.deadlinkcity.com/error-page.asp?e=401
                    - link "Errorcode 403" [ref=e426] [cursor=pointer]:
                      - /url: http://www.deadlinkcity.com/error-page.asp?e=403
                    - link "Errorcode 404" [ref=e427] [cursor=pointer]:
                      - /url: http://www.deadlinkcity.com/error-page.asp?e=404
                    - link "Errorcode 408" [ref=e428] [cursor=pointer]:
                      - /url: http://www.deadlinkcity.com/error-page.asp?e=408
                    - link "Errorcode 500" [ref=e429] [cursor=pointer]:
                      - /url: http://www.deadlinkcity.com/error-page.asp?e=500
                    - link "Errorcode 502" [ref=e430] [cursor=pointer]:
                      - /url: http://www.deadlinkcity.com/error-page.asp?e=502
                    - link "Errorcode 503" [ref=e431] [cursor=pointer]:
                      - /url: http://www.deadlinkcity.com/error-page.asp?e=503
              - generic [ref=e432]:
                - heading "Visitors" [level=2] [ref=e433]
                - generic [ref=e435]:
                  - generic "A chart." [ref=e439]:
                    - img "A chart." [ref=e440]
                    - generic "A tabular representation of the data in the chart." [ref=e453]:
                      - table [ref=e454]:
                        - rowgroup [ref=e455]:
                          - row [ref=e456]:
                            - columnheader [ref=e457]
                            - columnheader [ref=e458]
                        - rowgroup [ref=e459]:
                          - row "0 45" [ref=e460]:
                            - cell "0" [ref=e461]
                            - cell "45" [ref=e462]
                          - row "1 69" [ref=e463]:
                            - cell "1" [ref=e464]
                            - cell "69" [ref=e465]
                          - row "2 77" [ref=e466]:
                            - cell "2" [ref=e467]
                            - cell "77" [ref=e468]
                          - row "3 76" [ref=e469]:
                            - cell "3" [ref=e470]
                            - cell "76" [ref=e471]
                          - row "4 77" [ref=e472]:
                            - cell "4" [ref=e473]
                            - cell "77" [ref=e474]
                          - row "5 69" [ref=e475]:
                            - cell "5" [ref=e476]
                            - cell "69" [ref=e477]
                          - row "6 59" [ref=e478]:
                            - cell "6" [ref=e479]
                            - cell "59" [ref=e480]
                          - row "7 48" [ref=e481]:
                            - cell "7" [ref=e482]
                            - cell "48" [ref=e483]
                          - row "8 70" [ref=e484]:
                            - cell "8" [ref=e485]
                            - cell "70" [ref=e486]
                          - row "9 84" [ref=e487]:
                            - cell "9" [ref=e488]
                            - cell "84" [ref=e489]
                          - row "10 82" [ref=e490]:
                            - cell "10" [ref=e491]
                            - cell "82" [ref=e492]
                          - row "11 75" [ref=e493]:
                            - cell "11" [ref=e494]
                            - cell "75" [ref=e495]
                          - row "12 70" [ref=e496]:
                            - cell "12" [ref=e497]
                            - cell "70" [ref=e498]
                          - row "13 53" [ref=e499]:
                            - cell "13" [ref=e500]
                            - cell "53" [ref=e501]
                          - row "14 45" [ref=e502]:
                            - cell "14" [ref=e503]
                            - cell "45" [ref=e504]
                          - row "15 71" [ref=e505]:
                            - cell "15" [ref=e506]
                            - cell "71" [ref=e507]
                          - row "16 73" [ref=e508]:
                            - cell "16" [ref=e509]
                            - cell "73" [ref=e510]
                          - row "17 72" [ref=e511]:
                            - cell "17" [ref=e512]
                            - cell "72" [ref=e513]
                          - row "18 85" [ref=e514]:
                            - cell "18" [ref=e515]
                            - cell "85" [ref=e516]
                          - row "19 73" [ref=e517]:
                            - cell "19" [ref=e518]
                            - cell "73" [ref=e519]
                          - row "20 58" [ref=e520]:
                            - cell "20" [ref=e521]
                            - cell "58" [ref=e522]
                          - row "21 49" [ref=e523]:
                            - cell "21" [ref=e524]
                            - cell "49" [ref=e525]
                          - row "22 69" [ref=e526]:
                            - cell "22" [ref=e527]
                            - cell "69" [ref=e528]
                          - row "23 84" [ref=e529]:
                            - cell "23" [ref=e530]
                            - cell "84" [ref=e531]
                          - row "24 88" [ref=e532]:
                            - cell "24" [ref=e533]
                            - cell "88" [ref=e534]
                          - row "25 89" [ref=e535]:
                            - cell "25" [ref=e536]
                            - cell "89" [ref=e537]
                          - row "26 83" [ref=e538]:
                            - cell "26" [ref=e539]
                            - cell "83" [ref=e540]
                          - row "27 60" [ref=e541]:
                            - cell "27" [ref=e542]
                            - cell "60" [ref=e543]
                          - row "28 55" [ref=e544]:
                            - cell "28" [ref=e545]
                            - cell "55" [ref=e546]
                          - row "29 100" [ref=e547]:
                            - cell "29" [ref=e548]
                            - cell "100" [ref=e549]
                  - generic [ref=e550]: 7,685,771
    - contentinfo [ref=e551]:
      - generic [ref=e554]:
        - table [ref=e555]:
          - rowgroup [ref=e556]:
            - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=e557]:
              - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files" [ref=e558]:
                - generic [ref=e559]:
                  - generic [ref=e560]:
                    - heading "Form" [level=2] [ref=e561]
                    - generic [ref=e563]:
                      - generic [ref=e564]:
                        - heading "Section 1" [level=4] [ref=e565]
                        - paragraph [ref=e566]: This is a paragraph in Section 1.
                        - textbox [ref=e567]
                        - button "Submit" [ref=e568] [cursor=pointer]
                      - generic [ref=e569]:
                        - heading "Section 2" [level=4] [ref=e570]
                        - paragraph [ref=e571]: This is a paragraph in Section 2.
                        - textbox [ref=e572]
                        - button "Submit" [ref=e573] [cursor=pointer]
                      - generic [ref=e574]:
                        - heading "Section 3" [level=4] [ref=e575]
                        - paragraph [ref=e576]: This is a paragraph in Section 3.
                        - textbox [ref=e577]
                        - button "Submit" [ref=e578] [cursor=pointer]
                  - generic [ref=e579]:
                    - heading "Footer Links" [level=2] [ref=e580]
                    - list [ref=e582]:
                      - listitem [ref=e583]:
                        - link "Home" [ref=e584] [cursor=pointer]:
                          - /url: http://testautomationpractice.blogspot.com/
                      - listitem [ref=e585]:
                        - link "Hidden Elements & AJAX" [ref=e586] [cursor=pointer]:
                          - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
                      - listitem [ref=e587]:
                        - link "Download Files" [ref=e588] [cursor=pointer]:
                          - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
              - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=e589]:
                - generic [ref=e591]:
                  - heading "ShadowDOM" [level=2] [ref=e592]
                  - generic [ref=e593]:
                    - generic [ref=e594]:
                      - generic [ref=e595]: Mobiles
                      - generic [ref=e598]: Laptops
                      - link "Blog" [ref=e599] [cursor=pointer]:
                        - /url: https://www.pavantestingtools.com/
                      - textbox [ref=e600]
                      - checkbox [ref=e601]
                      - button "Choose File" [ref=e602]
                    - link "Youtube" [ref=e603] [cursor=pointer]:
                      - /url: https://www.youtube.com/@sdetpavan/videos
        - generic [ref=e606]:
          - text: Theme images by
          - link "merrymoonmary" [ref=e607] [cursor=pointer]:
            - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
          - text: . Powered by
          - link "Blogger" [ref=e608] [cursor=pointer]:
            - /url: https://www.blogger.com
          - text: .
  - generic [ref=e610]:
    - generic [ref=e611]: Diese Website verwendet Cookies von Google, um Dienste anzubieten und Zugriffe zu analysieren. Deine IP-Adresse und dein User-Agent werden zusammen mit Messwerten zur Leistung und Sicherheit für Google freigegeben. So können Nutzungsstatistiken generiert, Missbrauchsfälle erkannt und behoben und die Qualität des Dienstes gewährleistet werden.
    - generic [ref=e612]:
      - link "Weitere Informationen" [ref=e613] [cursor=pointer]:
        - /url: https://www.blogger.com/go/blogspot-cookies
      - link "Ok" [ref=e614] [cursor=pointer]:
        - /url: "#"
```

# Test source

```ts
  125 |     await locator.press(key);
  126 |   }
  127 | 
  128 |   // ── Checkbox & Radio ────────────────────────────────────────────────────────
  129 | 
  130 |   // Check a checkbox or radio — Playwright auto-waits
  131 |   async check(locator: Locator): Promise<void> {
  132 |     await locator.check();
  133 |   }
  134 | 
  135 |   // Uncheck a checkbox — Playwright auto-waits
  136 |   async uncheck(locator: Locator): Promise<void> {
  137 |     await locator.uncheck();
  138 |   }
  139 | 
  140 |   // ── Dropdown ────────────────────────────────────────────────────────────────
  141 | 
  142 |   // Select option by visible label text
  143 |   async selectByText(locator: Locator, text: string): Promise<void> {
  144 |     await locator.selectOption({ label: text });
  145 |   }
  146 | 
  147 |   // Select option by value attribute
  148 |   async selectByValue(locator: Locator, value: string): Promise<void> {
  149 |     await locator.selectOption({ value });
  150 |   }
  151 | 
  152 |   // ── Mouse ───────────────────────────────────────────────────────────────────
  153 | 
  154 |   // Hover — Playwright auto-waits for the element
  155 |   async hover(locator: Locator): Promise<void> {
  156 |     await locator.hover();
  157 |   }
  158 | 
  159 |   // Drag one element onto another
  160 |   async dragTo(source: Locator, target: Locator): Promise<void> {
  161 |     await source.dragTo(target);
  162 |   }
  163 | 
  164 |   // Move a range slider to a numeric value
  165 |   async moveSlider(locator: Locator, value: string): Promise<void> {
  166 |     await locator.fill(value);
  167 |   }
  168 | 
  169 |   // ── Scroll ──────────────────────────────────────────────────────────────────
  170 | 
  171 |   // Scroll a specific element into the viewport
  172 |   async scrollIntoView(locator: Locator): Promise<void> {
  173 |     await locator.scrollIntoViewIfNeeded();
  174 |   }
  175 | 
  176 |   // Scroll page to the very bottom
  177 |   async scrollToBottom(): Promise<void> {
  178 |     await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  179 |   }
  180 | 
  181 |   // Scroll page back to the top
  182 |   async scrollToTop(): Promise<void> {
  183 |     await this.page.evaluate(() => window.scrollTo(0, 0));
  184 |   }
  185 | 
  186 |   // ── Alerts ──────────────────────────────────────────────────────────────────
  187 | 
  188 |   // Register handler to accept the next alert or confirm dialog
  189 |   // Must be called BEFORE the action that triggers the dialog
  190 |   async acceptDialog(): Promise<void> {
  191 |     this.page.once('dialog', dialog => dialog.accept());
  192 |   }
  193 | 
  194 |   // Register handler to dismiss the next alert or confirm dialog
  195 |   async dismissDialog(): Promise<void> {
  196 |     this.page.once('dialog', dialog => dialog.dismiss());
  197 |   }
  198 | 
  199 |   // Register handler to fill and accept a prompt dialog
  200 |   async acceptPromptDialog(value: string): Promise<void> {
  201 |     this.page.once('dialog', dialog => dialog.accept(value));
  202 |   }
  203 | 
  204 |   // ── Screenshots ─────────────────────────────────────────────────────────────
  205 | 
  206 |   // Full page screenshot saved to /screenshots/<name>-<timestamp>.png
  207 |   async takeScreenshot(name: string): Promise<void> {
  208 |     await this.page.screenshot({
  209 |       path: `screenshots/${name}-${Date.now()}.png`,
  210 |       fullPage: true,
  211 |     });
  212 |   }
  213 | 
  214 |   // Screenshot of a single element only
  215 |   async takeElementScreenshot(locator: Locator, name: string): Promise<void> {
  216 |     await locator.screenshot({
  217 |       path: `screenshots/${name}-element-${Date.now()}.png`,
  218 |     });
  219 |   }
  220 | 
  221 |   // ── Getters ─────────────────────────────────────────────────────────────────
  222 | 
  223 |   // Get the visible inner text of an element
  224 |   async getText(locator: Locator): Promise<string> {
> 225 |     return locator.innerText();
      |                    ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  226 |   }
  227 | 
  228 |   // Get the current value of an input field
  229 |   async getValue(locator: Locator): Promise<string> {
  230 |     return locator.inputValue();
  231 |   }
  232 | 
  233 |   // Get any HTML attribute value from an element
  234 |   async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
  235 |     return locator.getAttribute(attribute);
  236 |   }
  237 | 
  238 |   // Returns true/false — does not throw if element is absent
  239 |   async isVisible(locator: Locator): Promise<boolean> {
  240 |     return locator.isVisible();
  241 |   }
  242 | 
  243 |   // Returns true if the element is enabled
  244 |   async isEnabled(locator: Locator): Promise<boolean> {
  245 |     return locator.isEnabled();
  246 |   }
  247 | 
  248 |   // Returns true if checkbox or radio is checked
  249 |   async isChecked(locator: Locator): Promise<boolean> {
  250 |     return locator.isChecked();
  251 |   }
  252 | 
  253 |   // ── Abstract ─────────────────────────────────────────────────────────────────
  254 | 
  255 |   // Each page object must declare its own URL
  256 |   abstract getPageUrl(): string;
  257 | }
```