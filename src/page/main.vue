<template>
    <div>
        <headerNav></headerNav>
        <router-view></router-view>
    </div>
</template>
<script>
import headerNav from "../components/header"
export default {
    name: 'app',
    components : {
        headerNav
    }
}
</script>