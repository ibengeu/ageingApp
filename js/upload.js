 document.getElementById("copyright").innerHTML = new Date().getFullYear();
        console.log("img src", document.getElementsByTagName("img")[0].src)

        const changedValue = value => document.getElementById("range-value").innerHTML = value;
        let image = null;
        const getUrl = (input) => {


            if (input.files && input.files[0]) {

                document.querySelector(".upload__image").addEventListener("click", ageImage({ age: 21, file: input.files[0]}));
                console.log(input.files[0])
                var reader = new FileReader();

                reader.onload = function (e) {
                    document.getElementById("selected-image").innerHTML = ""
                    const imgData = document.createElement("IMG");
                    imgData.src = e.target.result;
                    imgData.alt = "uploaded-image";
                    imgData.className = "__image";

                    console.log(imgData)

                    const imgLabel = document.getElementById("selected-image").appendChild(imgData);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }




        // axios.post('http://35.173.33.164:8000/swagger.json/predict', data , config).then(resp => {

        //     console.log(resp.data);
        // });

        // document.getElementById("age-image").addEventListener("click", () => {
        //     console.log("clicked")
        // })
        // document.getElementById("age-image").removeEventListener("click", () => {
        //     console.log("clicked")
        // })

        const ageImage = (data) => {
            console.log(data)
            axios.post('http://35.173.33.164:8000/swagger.json/predict', data, config).then(resp => {

                console.log(resp.data);
            });
            Î
        }