it ('zoho tool login',  ()=>{
 
browser.url('https://accounts.zoho.in/signin?servicename=zohopeople&signupurl=https://www.zoho.com/people/signup.html')
.sendKeys('#login_id','saravanapandi.c@elait.com')
.click('#nextbtn')
.sendKeys('#password','Perumaldevi@2327')
.click('#nextbtn')
.pause(2000)
.click('#ZPD_Top_Att_Stat')
.pause(2000)
})
