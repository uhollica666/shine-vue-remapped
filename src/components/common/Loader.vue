<template>
    <div class="container my-5">
        <h4 class="my-5 mx-auto text-center">🔄️ Fetching Contents... Please Wait</h4>
        <div class="row mb-5">
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
                <div class="card">
                    <div class="card-img"></div>
                    <div class="d-flex card-details">                        
                        <div class="card-icon"></div>
                        <div class="card-discription"></div>
                    </div>
                    <div class="pb-3">
                        <div class="card-discription2"></div>
                        <div class="card-discription2"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
                <div class="card">
                    <div class="card-img"></div>
                    <div class="d-flex card-details">                        
                        <div class="card-icon"></div>
                        <div class="card-discription"></div>
                    </div>
                    <div class="pb-3">
                        <div class="card-discription2"></div>
                        <div class="card-discription2"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
                <div class="card">
                    <div class="card-img"></div>
                    <div class="d-flex card-details">                        
                        <div class="card-icon"></div>
                        <div class="card-discription"></div>
                    </div>
                    <div class="pb-3">
                        <div class="card-discription2"></div>
                        <div class="card-discription2"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-4 col-xs-6">
                <div class="card">
                    <div class="card-img"></div>
                    <div class="d-flex card-details">                        
                        <div class="card-icon"></div>
                        <div class="card-discription"></div>
                    </div>
                    <div class="pb-3">
                        <div class="card-discription2"></div>
                        <div class="card-discription2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    /*eslint-disable*/
    name: "Loader",
}
</script>

<style scoped>
.card {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: flicker 800ms infinite ;
}
.card-img {
    width: 90%;
    aspect-ratio: 16/10;
    background-color: #d0d0d0;
    margin: 1rem auto;
    animation: flicker 1.2s infinite ;
}
.card-details{
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: flicker 800ms infinite ;
}
.card-icon{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #d0d0d0;
    margin: 0.5rem auto;
    animation: flicker 1.5s infinite ;
}
.card-discription{
    width: 70%;
    height: 1.5rem;
    background-color: #a7a7a7;
    margin: 0.5rem auto;
    animation: flicker 1s infinite ;
}
.card-discription2{
    width: 85%;
    height: 1rem;
    background-color: #d0d0d0;
    margin: 0.5rem auto;
    margin-bottom: 1rem;
    animation: flicker 500ms infinite ;
}
@keyframes flicker {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.8;
    }
    100% {
        opacity: 1;
    }
}
</style>