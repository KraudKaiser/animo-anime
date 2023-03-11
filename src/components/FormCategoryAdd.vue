<template>
   <v-card>
                <v-card-title>Añadir Categoría</v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="handleCategory">
                        <v-text-field label="Nombre" v-model="category.name" required></v-text-field>
                        <v-text-field label="Descripción" v-model="category.description" required></v-text-field>
                        <v-btn color="primary" type="submit">Añadir Categoría</v-btn>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                </v-card-actions>
            </v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data(){
        return{
            category:{
                name:"",
                description:""
            }
        }
    },
    methods:{
        ...mapActions(["addCategory"]),
        handleCategory(){
            this.addCategory(this.category)
        }
    }
}
</script>

<style>

</style>