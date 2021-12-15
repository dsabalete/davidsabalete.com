<template>
    <nav
        class="navbar right-0 left-0 z-20 sm:w-60 sm:h-screen sm:fixed sm:bg-blue-900 items-center"
        id="sideNav"
    >
        <a href="#" v-scroll-to="'#about'">
            <div class="sm:w-60 self-center">
                <div
                    class="fixed top-0 w-full text-center text-xl bg-blue-900 text-white p-4 sm:hidden"
                >
                    David Sabalete Rodríguez
                </div>
                <div class="mt-28">
                    <img
                        alt="Image of David"
                        class="rounded-full border-8 border-blue-100 mx-auto my-4 w-2/3"
                        src="../assets/images/profile.jpg"
                    />
                </div>
            </div>
        </a>
    </nav>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style lang="scss" scoped></style>
