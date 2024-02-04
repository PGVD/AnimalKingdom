# Animal Classification System

## Overview

This project implements a simple animal classification system in JavaScript, demonstrating key Object-Oriented Programming (OOP) principles such as encapsulation, inheritance, abstraction, and polymorphism.

## Principles Demonstrated

### 1. Encapsulation

The base class `Animal` serves as the foundation for encapsulating common attributes of animals, such as their name. Each animal class has a constructor to initialize these attributes.

### 2. Inheritance

Mixin classes (`ColdBloodedMixin`, `WarmBloodedMixin`, `InvertebrateMixin`, `VertebrateMixin`) are utilized to demonstrate inheritance. They provide additional behavior to the base `Animal` class, allowing the creation of subclasses with specific characteristics (e.g., cold-blooded, warm-blooded, vertebrate, invertebrate).

### 3. Abstraction

The `displayAnimalInfo` function demonstrates abstraction by providing a common interface to display information about different animal instances. This promotes a simplified way of interacting with various animal types without worrying about their specific implementations.

### 4. Polymorphism

Instances of different animal classes (`Arthropoda`, `Fish`, `Amphibia`, `Reptiles`, `AVES`, `Mammals`) are created and displayed using the common `displayAnimalInfo` interface. This showcases polymorphism, where different objects can be treated interchangeably through a unified interface.

## Usage

To run the code:

```bash
# Assuming the code is in a file named 'animalKingdom.js'
node animalKingdom.js
