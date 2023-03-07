<template>
	<v-row>
		<v-col cols="2">
			<v-sheet rounded="lg">
				<v-list color="transparent">
					<v-list-item
					v-for="n in 5"
					:key="n"
					link
					>
					<v-list-item-content>
						<v-list-item-title>
							List Item {{ n }}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
		</v-list>
	</v-sheet>
</v-col>
</v-row>
</template>

<script>
export default {

}
</script>
