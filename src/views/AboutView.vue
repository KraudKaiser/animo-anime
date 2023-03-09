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
						<v-img src="/images/team-member-1.png" height="400px" />
						<v-card-title>John Doe</v-card-title>
						<v-card-subtitle>Fundador</v-card-subtitle>
						<v-card-text>
							John es el fundador de Animo Time. Ha sido un fanático del anime desde su infancia y decidió crear esta página para compartir su pasión con otros fans.
				</v-card-text>
			</v-card>
		</v-col>
		<v-col cols="12" md="4">
			<v-card>
				<v-img src="/images/team-member-2.png" height="400px" />
				<v-card-title>Jane Smith</v-card-title>
				<v-card-subtitle>Editora de contenido</v-card-subtitle>
				<v-card-text>
					Jane es la editora de contenido de Animo Time. Es una apasionada del anime y trabaja duro para ofrecer artículos interesantes y relevantes para nuestra comunidad.
				</v-card-text>
			</v-card>
		</v-col>
		<v-col cols="12" md="4">
			<v-card>
				<v-img src="/images/team-member-3.png" height="400px" />
				<v-card-title>Mark Johnson</v-card-title>
				<v-card-subtitle>Desarrollador web</v-card-subtitle>
				<v-card-text>
					Mark es el desarrollador web de Animo Time. Trabaja constantemente para mejorar la página y ofrecer una experiencia única a nuestros usuarios.
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