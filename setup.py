# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in grafana/__init__.py
from grafana import __version__ as version

setup(
	name="grafana",
	version=version,
	description="Grafana Dashboards",
	author="Hazreen",
	author_email="hz@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
