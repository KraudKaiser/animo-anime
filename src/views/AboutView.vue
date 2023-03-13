<template>
  <v-app>
	<app-bar></app-bar>
	<v-main class="grey lighten-3 pa-5">

		<v-sheet class="d-flex justify-center">
			
			<v-container class="d-flex justify-center flex-column">
				<h1 class="d-flex justify-center display-1 mb-4 ">Sobre Animo Time</h1>
				
				<v-row class="d-flex pa-5">
					<v-row cols="12" md="6">
						<h1 class="heading-1">
							Animo Time es una página web dedicada a ofrecer información y entretenimiento relacionado con el anime y el manga. Nuestro objetivo es crear una comunidad donde los fans del anime puedan conectarse y compartir sus experiencias.
						</h1>
					</v-row>
				</v-row>
				
				<h2 class=" d-flex justify-center display-2 my-4">Nuestro equipo</h2>
				
				<v-row class="d-flex justify-center">
					<v-col cols="12" md="4">
						<v-card>
							<v-img src="../assets/fundador.jpg" height="400px" />
							<v-card-title>Ramiro Gimenez</v-card-title>
							<v-card-subtitle>Fundador</v-card-subtitle>
							<v-card-text>
								Ramiro es el fundador de Animo Time. Ha sido un fanático del anime desde su infancia y decidió crear esta página para compartir su pasión con otros fans.
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-sheet>
	</v-main>
</v-app>
</template>


<script>
import AppBar from '@/components/AppBar.vue';
export default{
	components:{
		AppBar
	}
}
</script>