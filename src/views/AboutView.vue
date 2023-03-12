<template>
  <v-app>
	<app-bar></app-bar>
	<v-sheet >
		
		<v-container>
			<h1 class="display-1 mb-4">Sobre Animo Time</h1>
			
			<v-row>
				<v-col cols="12" md="6">
					<v-img src="/images/logo.png" width="100%" />
				</v-col>
				<v-col cols="12" md="6">
					<p class="body-1">
						Animo Time es una página web dedicada a ofrecer información y entretenimiento relacionado con el anime y el manga. Nuestro objetivo es crear una comunidad donde los fans del anime puedan conectarse y compartir sus experiencias.
					</p>
				</v-col>
			</v-row>
			
			<h2 class="display-2 my-4">Nuestro equipo</h2>
			
			<v-row>
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