frappe.pages['grafana_dashboard'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Grafana Dashboard',
		single_column: true
	});

	new erpnext.GrafanaDashboard(page);
}

erpnext.GrafanaDashboard= class GrafanaDashboard {
	constructor(page) {
		this.page = page;
		this.make_form();
	}
	make_form() {
		// Create a form with a button
		const form = new frappe.ui.FieldGroup({
			fields: [
				{
					label: __('Grafana Dashboard Link'),
					fieldname: 'GDashboard_Link',
					fieldtype: 'Data',  // Assuming the Grafana Dashboard Link is a string
					placeholder: 'Enter Grafana Dashboard Link',
					reqd: true,  // Make the field required if necessary
				},
				{
					label: __('Confirm'),
					fieldname: 'custom_button',
					fieldtype: 'Button',
					icon: 'fa fa-check',
					click: () => this.customButtonClick(form),  // Pass the form instance to the click handler
				}
			],
			body: this.page.body,
			on_submit: values => {
				// Handle form submission if needed
				console.log('Submitted values:', values);
			}
		});
		form.make();
		return form;
	}
	
	customButtonClick(form) {
		// Get the Grafana Dashboard Link from the form's values
		const grafanaDashboardLink = form.get_values().GDashboard_Link;
	
		// Check if the Grafana Dashboard Link is provided
		if (grafanaDashboardLink) {
			// Create a new iframe element
			const iframe = document.createElement('iframe');
	
			// Set attributes for the iframe
			iframe.setAttribute('src', grafanaDashboardLink);
			iframe.style.position = 'fixed';
			iframe.style.width = '100%';
			iframe.style.height = '600px';
			iframe.style.top = '10px';
			iframe.style.marginTop = '100px';
	
			// Append the iframe to the body or any other HTML element
			document.body.appendChild(iframe);
		} else {
			frappe.msgprint(__('Please enter a Grafana Dashboard Link.'));
		}
	}
	
}