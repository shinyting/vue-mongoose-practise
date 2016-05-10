<template>
    <div id="wrapper">
        <nav class="navbar navbar-default">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <i class="glyphicon glyphicon-time"></i>
                    Word list
                </a>
                <ul class="nav navbar-nav">
                    <li>
                        <a v-link="'/home'">home</a>
                    </li>
                    <li>
                        <a v-link="'/list'">list</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <div class="col-sm-3">
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>