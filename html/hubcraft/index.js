async function submitOn() {
    await submit("on");
}

async function submitOff() {
    await submit("off");
}

async function submit(powerSet) {
    var pw = document.querySelector("#pw").value;
    var requestStatusNode = document.querySelector("#response-status");
    requestStatusNode.setAttribute("style", "color:black");
    requestStatusNode.innerHTML = "Processing... (this could take up to a minute)";
    await fetch("https://prod-30.centralus.logic.azure.com/workflows/4cf7e6efe11a4f818e4137920c47a1b9/triggers/manual/paths/invoke/power?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hN0JnbQuw1Rtsq9EDRVaxV-MDJGH2v1mCljLbxiVZx8", {
        headers: {
            "power-set": powerSet,
            password: pw
        }
    }).then(response => {
        var requestStatusNode = document.querySelector("#response-status");
        if (response.status == 401) {
            requestStatusNode.innerHTML = "Password Incorrect";
            requestStatusNode.setAttribute("style", "color:red");
        }
        else if (response.staus = 202) {
            var vmStatus = response.headers.get("vm-status");
            requestStatusNode.setAttribute("style", "color:green");
            requestStatusNode.innerHTML = "Server Status: " + response.headers.get("vm-status");
        } else {
            requestStatusNode.innerHTML = "Something messed up but idk what, sorry";
        }
    })
}
