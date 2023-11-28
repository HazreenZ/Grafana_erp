from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
        {
            "label": _("Grafana"),
            "icon": "fa fa-star",
            "items": [
                {
                    "type": "page",
                    "name": "grafana_dashboard",
                    "label":_("Grafana Dashboard"),
                    "description": _("Visualize the dashboard."),
                    "onboard": 1,
                },
            ]
        },
    ]
