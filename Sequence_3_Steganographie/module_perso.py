#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Jan 15 09:56:35 2021

@author: bruno
"""

def test_parite(nb):
    """
    Cette fonction reçoit en entrée un nombre entier.
    Elle teste si ce nombre est pair
    puis renvoit en sortie 1 ou 0.
    Précondition : Le nombre doit être entier.
    Postcondition : 0 si pair, 1 si impair
    Tests :
    >>> test_parite(8)
    0
    >>> test_parite(7)
    1
    """
    assert type(nb)==int,'Le nombre doit être un entier'
    return nb%2