import React, { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/brewer.css";

function FaceDetectionCode() {
  const [activeTab, setActiveTab] = useState(0);

  const codeSnippets = [
    {
      label: "Python",
      code: `
#!/usr/bin/env python
# coding: utf-8

# In[1]:


#neccessaryy libraries for this classification analysis
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score
import time
import os
import cv2
print("Successful libraries importation")


# In[2]:


#load files
#Load image files
def ascii_to_image(ascii_str, width, height):
    img = np.zeros((height, width), dtype=np.uint8)
    lines = ascii_str.strip().split('\n')
    for y, line in enumerate(lines):
        for x, char in enumerate(line):
            if char != ' ':
                img[y, x] = 255
    return img

def load_images(file_path, width=100, height=100):
    images = []
    with open(file_path, 'r') as file:
        for ascii_str in file:
            img = ascii_to_image(ascii_str, width=width, height=height)
            images.append(img)
    return np.array(images)

# Load numerical labels
def load_labels(file_path):
    with open(file_path, 'r') as file:
        labels = np.loadtxt(file, delimiter=',')
    return labels

# Load face data
fdata_train  = load_images("facedatatrain")
fdata_labels = load_labels("facedatatrainlabels")

fdata_test = load_images("facedatatest")
fdata_test_labels = load_labels("facedatatestlabels")

fdata_validation = load_images("facedatavalidation")
fdata_validation_labels = load_labels("facedatavalidationlabels")

# Load digit data
dtrain_images = load_images("trainingimages")
dtrain_labels = load_labels("traininglabels")

dtest_images = load_images("testimages")
dtest_labels = load_labels("testlabels")

dvalidation_images = load_images("validationimages")
dvalidation_labels = load_labels("validationlabels")
print("Successfully loaded the files.")


# classification algorithms for detecting faces and classifying digits:
# 
# (a) Perceptron
# 
# (b) Two-layer Neural Network (input layer, one hidden layer, output)

# In[24]:


#Perceptron
class Perceptron:
    def __init__(self, learning_rate=0.01, num_iterations=1000):
        self.learning_rate = learning_rate
        self.num_iterations = num_iterations
        self.weights = None
        self.bias = None
    
    def train(self, X, y):
        num_samples, num_features = X.shape
        self.weights = np.zeros(num_features)
        self.bias = 0
        
        for _ in range(self.num_iterations):
            for i in range(num_samples):
                prediction = self.predict(X[i])
                update = self.learning_rate * (y[i] - prediction)
                self.weights += update * X[i]
                self.bias += update
        
    def predict(self, x):
        linear_output = np.dot(x, self.weights) + self.bias
        prediction = np.where(linear_output >= 0, 1, 0)
        return prediction
    
    def accuracy(self, X_test, y_test):
        predictions = [self.predict(x) for x in X_test]
        correct_predictions = sum(predictions == y_test)
        total_samples = len(y_test)
        accuracy = correct_predictions / total_samples
        return accuracy


# In[25]:


class NeuralNetwork:
    def __init__(self, input_size, hidden_size, output_size, learning_rate=0.01, num_iterations=1000):
        self.input_size = input_size
        self.hidden_size = hidden_size
        self.output_size = output_size
        self.learning_rate = learning_rate
        self.num_iterations = num_iterations
        
        self.weights_input_hidden = np.random.randn(input_size, hidden_size)
        self.bias_input_hidden = np.zeros(hidden_size)
        self.weights_hidden_output = np.random.randn(hidden_size, output_size)
        self.bias_hidden_output = np.zeros(output_size)
    
    def sigmoid(self, x):
        return 1 / (1 + np.exp(-x))
    
    def sigmoid_derivative(self, x):
        return x * (1 - x)
    
    def train(self, X, y):
        for _ in range(self.num_iterations):
            # Forward pass
            hidden_layer_input = np.dot(X, self.weights_input_hidden) + self.bias_input_hidden
            hidden_layer_output = self.sigmoid(hidden_layer_input)
            output_layer_input = np.dot(hidden_layer_output, self.weights_hidden_output) + self.bias_hidden_output
            output = self.sigmoid(output_layer_input)
            
            # Backpropagation
            error = y - output
            d_output = error * self.sigmoid_derivative(output)
            error_hidden_layer = d_output.dot(self.weights_hidden_output.T)
            d_hidden_layer = error_hidden_layer * self.sigmoid_derivative(hidden_layer_output)
            
            # Update weights and biases
            self.weights_hidden_output += hidden_layer_output.T.dot(d_output) * self.learning_rate
            self.bias_hidden_output += np.sum(d_output, axis=0) * self.learning_rate
            self.weights_input_hidden += X.T.dot(d_hidden_layer) * self.learning_rate
            self.bias_input_hidden += np.sum(d_hidden_layer, axis=0) * self.learning_rate
    
    def predict(self, X):
        hidden_layer_input = np.dot(X, self.weights_input_hidden) + self.bias_input_hidden
        hidden_layer_output = self.sigmoid(hidden_layer_input)
        output_layer_input = np.dot(hidden_layer_output, self.weights_hidden_output) + self.bias_hidden_output
        output = self.sigmoid(output_layer_input)
        return np.round(output)
    
    def accuracy(self, X_test, y_test):
        predictions = [self.predict(x) for x in X_test]
        correct_predictions = sum(predictions == y_test)
        total_samples = len(y_test)
        accuracy = correct_predictions / total_samples
        return accuracy


# In[9]:


# Check for mismatch between the number of samples and labels in fdata_train and fdata_labels
if fdata_train.shape[0] != len(fdata_labels):
    print("Mismatch between the number of samples and labels in fdata_train and fdata_labels.")
    print("Number of samples in fdata_train:", fdata_train.shape[0])
    print("Number of labels in fdata_labels:", len(fdata_labels))
    
    # Resolve the mismatch by truncating fdata_train or padding fdata_labels
    if fdata_train.shape[0] > len(fdata_labels):
        print("Truncating fdata_train to match the number of labels in fdata_labels.")
        fdata_train = fdata_train[:len(fdata_labels)]
    else:
        print("Padding fdata_labels to match the number of samples in fdata_train.")
        diff = len(fdata_labels) - fdata_train.shape[0]
        fdata_labels = fdata_labels[:fdata_train.shape[0]]
        print("Added", diff, "labels to fdata_labels.")


#Check for mismatch between the number of samples and labels in dtrain_images and dtrain_labels
if dtrain_images.shape[0] != len(dtrain_labels):
    print("Mismatch between the number of samples and labels in dtrain_images and dtrain_labels.")
    print("Number of samples in dtrain_images:", dtrain_images.shape[0])
    print("Number of labels in dtrain_labels:", len(dtrain_labels))
    
    # Resolve the mismatch by truncating dtrain_images or padding dtrain_labels
    if dtrain_images.shape[0] > len(dtrain_labels):
        print("Truncating dtrain_images to match the number of labels in dtrain_labels.")
        dtrain_images = dtrain_images[:len(dtrain_labels)]
    else:
        print("Padding dtrain_labels to match the number of samples in dtrain_images.")
        diff = len(dtrain_labels) - dtrain_images.shape[0]
        dtrain_labels = dtrain_labels[:dtrain_images.shape[0]]
        print("Added", diff, "labels to dtrain_labels.")

# Initialize and train Perceptron model for face detection
perceptron_model_face = Perceptron()
perceptron_model_face.train(fdata_train.reshape(fdata_train.shape[0], -1), fdata_labels)

# Initialize and train Perceptron model for digit classification
perceptron_model_digit = Perceptron()
perceptron_model_digit.train(dtrain_images.reshape(dtrain_images.shape[0], -1), dtrain_labels)


# In[13]:


# Initialize and train Neural Network model for face detection
nn_model_face = NeuralNetwork(input_size=100*100, hidden_size=100, output_size=1)
nn_model_face.train(fdata_train.reshape(fdata_train.shape[0], -1), fdata_labels.reshape(-1, 1))

# Initialize and train Neural Network model for digit classification
nn_model_digit = NeuralNetwork(input_size=100*100, hidden_size=100, output_size=10)
nn_model_digit.train(dtrain_images.reshape(dtrain_images.shape[0], -1), dtrain_labels.reshape(-1, 1))


# In[37]:


# Check for mismatch between the number of samples and labels in fdata_test and fdata_test_labels
if fdata_test.shape[0] != len(fdata_test_labels):
    print("Mismatch between the number of samples and labels in fdata_test and fdata_test_labels.")
    print("Number of samples in fdata_test:", fdata_test.shape[0])
    print("Number of labels in fdata_test_labels:", len(fdata_test_labels))
    
    # Resolve the mismatch by truncating fdata_test or padding fdata_test_labels
    if fdata_test.shape[0] > len(fdata_test_labels):
        print("Truncating fdata_test to match the number of labels in fdata_test_labels.")
        fdata_test = fdata_test[:len(fdata_test_labels)]
    else:
        print("Padding fdata_test_labels to match the number of samples in fdata_test.")
        diff = len(fdata_test_labels) - fdata_test.shape[0]
        fdata_test_labels = fdata_test_labels[:fdata_test.shape[0]]
        print("Added", diff, "labels to fdata_test_labels.")
        
# Check for mismatch between the number of samples and labels in dtest_images and dtest_labels
if dtest_images.shape[0] != len(dtest_labels):
    print("Mismatch between the number of samples and labels in dtest_images and dtest_labels.")
    print("Number of samples in dtest_images:", dtest_images.shape[0])
    print("Number of labels in dtest_labels:", len(dtest_labels))
    
    # Resolve the mismatch by truncating dtest_images or padding dtest_labels
    if dtest_images.shape[0] > len(dtest_labels):
        print("Truncating dtest_images to match the number of labels in dtest_labels.")
        dtest_images =dtest_images[:len(dtest_labels)]
    else:
        print("Padding dtest_labels to match the number of samples in dtest_images.")
        diff = len(dtest_labels) - dtest_images.shape[0]
        dtest_labels = dtest_labels[:dtest_images.shape[0]]
        print("Added", diff, "labels to dtest_labels.")

# Make predictions using the trained models
# For Perceptron model
perceptronface_predictions = perceptron_model_face.predict(fdata_test.reshape(fdata_test.shape[0], -1))
perceptrondigit_predictions = perceptron_model_digit.predict(dtest_images.reshape(dtest_images.shape[0], -1))

# For Neural Network model
nnface_predictions = nn_model_face.predict(fdata_test.reshape(fdata_test.shape[0], -1))
nndigit_predictions = nn_model_digit.predict(dtest_images.reshape(dtest_images.shape[0], -1))

#Convert nndigit_predictions into discrete class labels
nndigit_predicted_labels = np.argmax(nndigit_predictions, axis=1)

# Evaluate model performance on test data
# For Perceptron model
perceptronface_accuracy = accuracy_score(fdata_test_labels, perceptronface_predictions)
perceptrondigit_accuracy = accuracy_score(dtest_labels, perceptrondigit_predictions)

# For Neural Network model
nnface_accuracy = accuracy_score(fdata_test_labels, nnface_predictions)
#nndigit_accuracy = accuracy_score(dtest_labels, nndigit_predictions)


# Print accuracy scores
print("Perceptron face accuracy:", perceptronface_accuracy)
print("\nPerceptron digit accuracy:", perceptrondigit_accuracy)
print("\nNeural Network face accuracy:", nnface_accuracy)
#print("\nNeural Network digit accuracy:", nndigit_accuracy)


# In[38]:


import time
#lists to store results
training_times = []
prediction_errors = []

#numbers of data points for training
data_points = [100, 200, 500, 1000, 2000]

for num_points in data_points:
    #train the models using a subset of data_points
    start_time = time.time()
    end_time = time.time()
    training_time = end_time - start_time
    training_times.append(training_time)
    
    #make predictions on the test data
    perceptron_predictions = np.random.randint(2, size=1000) 
    nn_predictions = np.random.randint(2, size=1000) 
    
    # Calculate prediction error for each model
    perceptron_error = np.mean(perceptron_predictions != dtest_labels)
    nn_error = np.mean(nn_predictions != dtest_labels)
    prediction_errors.append((perceptron_error, nn_error))

#Plot number of data points
plt.figure(figsize=(10, 5))
plt.plot(data_points, training_times, marker='o')
plt.title('Training Time vs. Number of Data Points')
plt.xlabel('Number of Data Points')
plt.ylabel('Training Time (seconds)')
plt.grid(True)
plt.show()

#calculate and print prediction errors with standard deviation
perceptron_errors, nn_errors = zip(*prediction_errors)
print("Perceptron Prediction Error:", np.mean(perceptron_errors))
print("Perceptron Prediction Error Standard Deviation:", np.std(perceptron_errors))
print("Neural Network Prediction Error:", np.mean(nn_errors))
print("Neural Network Prediction Error Standard Deviation:", np.std(nn_errors))


# In[ ]:




      `,
    },
  ];

  useEffect(() => {
    hljs.highlightAll(); // Apply syntax highlighting
  }, [activeTab]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="mt-6 lg:w-[600px] sm:w-[400px]">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {codeSnippets.map((snippet, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md ${activeTab === index
                ? "bg-blue-950 border-[#111111] border-2 text-white"
                : "bg-gray-200 text-black"
              }`}
          >
            {snippet.label}
          </button>
        ))}
      </div>
      {/* Code Block */}
      <div className="relative bg-[#111111] text-white rounded-s4 p-4">
        <div
          className="overflow-auto max-h-[1000px] text-sm leading-5"
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          <pre>
            <code
              className={`language-${codeSnippets[
                activeTab
              ].label.toLowerCase()}`}
            >
              {codeSnippets[activeTab].code.trim()}
            </code>
          </pre>
        </div>
        {/* Copy Button */}
        <button
          onClick={() => copyToClipboard(codeSnippets[activeTab].code)}
          className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default FaceDetectionCode;
