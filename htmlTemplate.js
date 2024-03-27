function getHtml(username, hashedId, isVerification) {
  if (isVerification) {
    return `
        <html>

<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0;">
  <meta name="format-detection" content="telephone=no" />

  <style>
    /* Reset styles */
    body {
      margin: 0;
      padding: 0;
      min-width: 100%;
      width: 100% !important;
      height: 100% !important;
    }

    body,
    table,
    td,
    div,
    p,
    a {
      -webkit-font-smoothing: antialiased;
      text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      line-height: 100%;
    }

    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-collapse: collapse !important;
      border-spacing: 0;
    }

    img {
      border: 0;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    #outlook a {
      padding: 0;
    }

    .ReadMsgBody {
      width: 100%;
    }

    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }

    @media all and (min-width: 560px) {
      body {
        margin-top: 30px;
      }
    }
    
    /* Rounded corners */
    @media all and (min-width: 560px) {
      .container {
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -khtml-border-radius: 8px;
      }
    }
    /* Links */
    a,
    a:hover {
      color: #127DB3;
    }

    .footer a,
    .footer a:hover {
      color: #999999;
    }
  </style>

  <!-- MESSAGE SUBJECT -->
  <title>Confirm email template</title>

</head>

<!-- BODY -->
<body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0;  padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
	background-color: #F0F0F0;
	color: #000000;" bgcolor="#F0F0F0" text="#000000">
  <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background">
    <tr>
      <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#F0F0F0">
        <table border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#FFFFFF" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
	max-width: 560px;" class="container">
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 24px; font-weight: bold; line-height: 130%;
			padding-top: 25px;
			color: #000000;
			font-family: sans-serif;" class="header">
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 25px;" class="line">
              <hr color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
			padding-top: 25px; 
			color: #000000;
			font-family: sans-serif;" class="paragraph">
              Hi ${username},<br> In order to start using your new account, you need to confirm your email address.
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 25px;
			padding-bottom: 5px;" class="button">
                <table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;">
                  <tr>
                    <td align="center" valign="middle" style="padding: 12px 24px; margin: 0; text-decoration: underline; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;"
                        bgcolor="#3969d5"><a target="_blank" style="text-decoration: underline;
					color: #FFFFFF; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 120%;" href="https://expaper.vercel.app/api/verify?id=${hashedId}">
						Verify Email Address
					</a>
                    </td>
                  </tr>
                </table>
              </a>
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
			padding-top: 25px;" class="line">
              <hr color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
			padding-top: 20px;
			padding-bottom: 25px;
			color: #000000;
			font-family: sans-serif;" class="paragraph">
              If you did not sign up for this account you can ignore this email and the account will be deleted.
            </td>
          </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" align="center" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
	max-width: 560px;" class="wrapper">
          <tr>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `;
  }

  else {
    return `
        <!DOCTYPE html>
        <head>
        <title>Reset Password</title>
        </head>
        <body>
            <center>
            <h1>Hi ${username}</h1>
            <h3>To Reset your password, <a href="https://expaper.vercel.app/api/reset?id=${hashedId}"> Click here</a></h3>
            </center>
        </body>
        </html>
        `
  }
}

function getResetPasswordHtml(username) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reset Password</title>
<style>
body {
font-family: Arial, sans-serif;
background-color: #f4f4f4;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
margin: 0;
}

.container {
background-color: #fff;
padding: 20px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
max-width: 400px;
width: 100%;
}

h2 {
text-align: center;
color: #333;
}

label {
display: block;
margin-bottom: 8px;
color: #333;
}

input {
width: 100%;
padding: 8px;
margin-bottom: 16px;
box-sizing: border-box;
}

button {
background-color: #4caf50;
color: #fff;
padding: 10px;
border: none;
border-radius: 4px;
cursor: pointer;
width: 100%;
}

button:hover {
background-color: #45a049;
}

.error {
color: red;
margin-top: 8px;
}
</style>
</head>
<body>

<div class="container">
<h2>Reset Password</h2>

<form id="resetPasswordForm">
<label for="newPassword">New Password:</label>
<input type="password" id="newPassword" name="newPassword" required>

<label for="confirmNewPassword">Confirm New Password:</label>
<input type="password" id="confirmNewPassword" name="confirmNewPassword" required>

<div class="error" id="passwordMatchError"></div>

<button type="button" onclick="submitForm()">Submit</button>
</form>
</div>

<script>
function savePassword(newPassword) {
fetch('https://expaper.vercel.app/api/changePass', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username : "${username}",
    newPassword: newPassword,
  }),
})
.then(response => response.json())
.then(data => {
  alert(data['message']);
  window.close();
  // You can perform additional actions here if needed
})
.catch(error => {
 alert(error);
  // Handle error appropriately
});
}
function submitForm() {
var newPassword = document.getElementById('newPassword').value;
var confirmNewPassword = document.getElementById('confirmNewPassword').value;
var passwordMatchError = document.getElementById('passwordMatchError');

if (newPassword === '' || confirmNewPassword === '') {
  passwordMatchError.textContent = 'Both fields are required.';
} else if (newPassword !== confirmNewPassword) {
  passwordMatchError.textContent = 'Passwords do not match.';
} else {
  // Form is valid, perform your submission logic here
  // alert('Form submitted successfully!');
  savePassword(newPassword);
  // You can also submit the form to a server using AJAX, for example.
}
}
</script>

</body>
</html>

  `
    ;
}


module.exports = { getHtml, getResetPasswordHtml };


